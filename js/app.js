// ==========================================
// Ana Uygulama Mantığı
// ==========================================

// Sayfa geçişlerini yönet
function showPage(pageId) {
    // Tüm sayfaları gizle
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // İstenen sayfayı göster
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        
        // Sayfa özel işlemleri
        if (pageId === 'infoPage') {
            loadInfoContent();
        } else if (pageId === 'quizPage') {
            resetQuizPage();
        } else if (pageId === 'scenariosPage') {
            scenarioManager.showScenarioSelection();
        } else if (pageId === 'progressPage') {
            loadProgressPage();
        } else if (pageId === 'timelinePage') {
            // Zaman çizelgesi sayfası - özel işlem gerekmez
            document.getElementById('diseaseSelect').value = '';
            document.getElementById('timelineContent').innerHTML = '';
        }
    }

    // Sayfayı yukarı kaydır
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Quiz sayfasını sıfırla
function resetQuizPage() {
    document.getElementById('quizStart').classList.remove('hidden');
    document.getElementById('quizGame').classList.add('hidden');
    document.getElementById('quizResults').classList.add('hidden');
}

// ==========================================
// Bilgi Modülü İçeriği
// ==========================================

function loadInfoContent() {
    // CYBE sekmesi
    loadCybeTab();
    
    // Korunma sekmesi
    loadProtectionTab();
    
    // El yıkama sekmesi
    loadHandwashTab();
}

// CYBE bilgilerini yükle
function loadCybeTab() {
    const container = document.getElementById('cybeTab');
    
    // Başlık ekle
    container.innerHTML = `
        <div class="info-intro" style="text-align: center; margin-bottom: var(--spacing-lg); padding: var(--spacing-md); background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%); border-radius: var(--radius-lg);">
            <h3 style="color: var(--color-primary); margin-bottom: var(--spacing-xs);">🦠 Cinsel Yolla Bulaşan Enfeksiyonlar (CYBE)</h3>
            <p style="color: var(--color-text); max-width: 800px; margin: 0 auto;">
                Aşağıda en yaygın 10 CYBE türü hakkında detaylı bilgi bulabilirsiniz. 
                Her hastalığın belirtilerini, bulaşma yollarını ve korunma yöntemlerini öğrenin.
            </p>
        </div>
        <div class="info-grid"></div>
    `;
    
    const grid = container.querySelector('.info-grid');

    cybeInfo.forEach((disease, index) => {
        const card = document.createElement('div');
        card.className = 'info-card animate-fadeIn';
        card.style.animationDelay = `${index * 0.05}s`;
        
        card.innerHTML = `
            <h4>${disease.icon} ${disease.name}</h4>
            
            <h5 style="color: var(--color-primary); margin-top: var(--spacing-sm);">📋 Belirtiler:</h5>
            <ul>
                ${disease.symptoms.map(s => `<li>${s}</li>`).join('')}
            </ul>
            
            <h5 style="color: var(--color-primary); margin-top: var(--spacing-sm);">⚠️ Bulaşma Yolları:</h5>
            <ul>
                ${disease.transmission.map(t => `<li>${t}</li>`).join('')}
            </ul>
            
            <h5 style="color: var(--color-primary); margin-top: var(--spacing-sm);">🛡️ Korunma:</h5>
            <ul>
                ${disease.prevention.map(p => `<li>${p}</li>`).join('')}
            </ul>
        `;
        
        grid.appendChild(card);
    });
}

// Korunma bilgilerini yükle
function loadProtectionTab() {
    const container = document.getElementById('protectionTab');
    
    container.innerHTML = `
        <!-- Başlık ve Giriş -->
        <div class="protection-hero" style="text-align: center; margin-bottom: var(--spacing-xl); padding: var(--spacing-xl) var(--spacing-lg); background: linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(16, 185, 129, 0.08) 100%); border-radius: 20px; border: 1px solid rgba(37, 99, 235, 0.1);">
            <h3 style="font-size: 2rem; color: var(--color-primary); margin-bottom: var(--spacing-sm); font-weight: 800;">🛡️ Korunma Yöntemleri</h3>
            <p style="font-size: 1.125rem; color: var(--color-text); max-width: 800px; margin: 0 auto; line-height: 1.7;">
                CYBE'lerden korunmak için alabileceğiniz önlemler ve bilmeniz gereken önemli bilgiler. 
                Kendinizi ve sevdiklerinizi korumak için bu bilgileri mutlaka okuyun.
            </p>
        </div>

        <!-- Ana Korunma Yöntemleri Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--spacing-lg); margin-bottom: var(--spacing-xl);">
            
            <!-- Kondom Kullanımı -->
            <div class="info-card animate-fadeIn" style="border-left-color: var(--color-primary);">
                <div style="display: flex; align-items: center; gap: var(--spacing-sm); margin-bottom: var(--spacing-md);">
                    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, var(--color-primary), var(--color-secondary)); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 2rem; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);">
                        🛡️
                    </div>
                    <h4 style="margin: 0; font-size: 1.375rem;">Bariyer Yöntemler</h4>
                </div>
                <h5 style="color: var(--color-primary); margin-top: var(--spacing-md);">Kondom Kullanımı:</h5>
                <ul>
                    <li>Her cinsel ilişkide baştan sona kullanın</li>
                    <li>Lateks veya poliüretan kondom tercih edin</li>
                    <li>Son kullanma tarihini kontrol edin</li>
                    <li>Doğru boyut ve kaliteli marka seçin</li>
                    <li>Yağ bazlı kayganlaştırıcı kullanmayın</li>
                    <li>Çift kondom kullanmayın (yırtılma riski)</li>
                </ul>
                <div style="margin-top: var(--spacing-md); padding: var(--spacing-sm); background: rgba(16, 185, 129, 0.1); border-radius: 8px; border-left: 3px solid var(--color-secondary);">
                    <strong style="color: var(--color-secondary);">✓ Etkinlik:</strong> Doğru kullanıldığında %98 etkili
                </div>
            </div>

            <!-- Aşılama -->
            <div class="info-card animate-fadeIn" style="animation-delay: 0.1s; border-left-color: var(--color-secondary);">
                <div style="display: flex; align-items: center; gap: var(--spacing-sm); margin-bottom: var(--spacing-md);">
                    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, var(--color-secondary), var(--color-primary)); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 2rem; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);">
                        💉
                    </div>
                    <h4 style="margin: 0; font-size: 1.375rem;">Aşılama</h4>
                </div>
                <h5 style="color: var(--color-secondary);">HPV Aşısı:</h5>
                <ul>
                    <li>9-45 yaş arası herkese önerilir</li>
                    <li>3 doz olarak uygulanır</li>
                    <li>Serviks, anüs, boğaz kanserlerinden korur</li>
                    <li>Genital siğillerden korur</li>
                </ul>
                <h5 style="color: var(--color-secondary); margin-top: var(--spacing-md);">Hepatit B Aşısı:</h5>
                <ul>
                    <li>Tüm bebeklere rutin olarak yapılır</li>
                    <li>Yetişkinler için 3 doz şema</li>
                    <li>Ömür boyu koruma sağlar</li>
                    <li>Karaciğer kanseri riskini azaltır</li>
                </ul>
                <div style="margin-top: var(--spacing-md); padding: var(--spacing-sm); background: rgba(16, 185, 129, 0.1); border-radius: 8px; border-left: 3px solid var(--color-secondary);">
                    <strong style="color: var(--color-secondary);">✓ Önemli:</strong> Aşılar ücretsiz veya düşük maliyetlidir
                </div>
            </div>

            <!-- Düzenli Test -->
            <div class="info-card animate-fadeIn" style="animation-delay: 0.2s; border-left-color: #f59e0b;">
                <div style="display: flex; align-items: center; gap: var(--spacing-sm); margin-bottom: var(--spacing-md);">
                    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #f59e0b, #ef4444); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 2rem; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);">
                        🔬
                    </div>
                    <h4 style="margin: 0; font-size: 1.375rem;">Düzenli Tarama</h4>
                </div>
                <h5 style="color: #f59e0b;">Test Önerileri:</h5>
                <ul>
                    <li><strong>Yılda 1 kez:</strong> Aktif cinsel yaşamı olanlar</li>
                    <li><strong>3-6 ayda bir:</strong> Yüksek risk grubundakiler</li>
                    <li><strong>Partner değişikliğinde:</strong> Mutlaka test</li>
                    <li><strong>Hamanlık öncesi:</strong> Çift taraması</li>
                </ul>
                <h5 style="color: #f59e0b; margin-top: var(--spacing-md);">Test Türleri:</h5>
                <ul>
                    <li>HIV testi (3. ay kontrolü önemli)</li>
                    <li>Hepatit B ve C testleri</li>
                    <li>Sifiliz testi (VDRL/RPR)</li>
                    <li>Klamidya ve gonore testleri</li>
                    <li>HPV DNA testi (kadınlar için)</li>
                </ul>
            </div>
        </div>

        <!-- İletişim ve İlişki Sağlığı -->
        <div class="info-card animate-fadeIn" style="animation-delay: 0.3s; background: linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(59, 130, 246, 0.05)); border-left-color: #8b5cf6;">
            <div style="display: flex; align-items: center; gap: var(--spacing-sm); margin-bottom: var(--spacing-md);">
                <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #8b5cf6, #6366f1); border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 2rem; box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);">
                    💬
                </div>
                <h4 style="margin: 0; font-size: 1.375rem;">İletişim ve Güven</h4>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--spacing-md);">
                <div>
                    <h5 style="color: #8b5cf6;">Partner İletişimi:</h5>
                    <ul>
                        <li>Cinsel geçmişinizi paylaşın</li>
                        <li>Test sonuçlarınızı gösterin</li>
                        <li>Korunma yöntemlerini birlikte belirleyin</li>
                        <li>Belirtiler olduğunda hemen bildirin</li>
                    </ul>
                </div>
                <div>
                    <h5 style="color: #8b5cf6;">Sağlıklı İlişki:</h5>
                    <ul>
                        <li>Karşılıklı sadakat en güvenli yoldur</li>
                        <li>Rızaya dayalı ilişki kurun</li>
                        <li>Alkol/uyuşturucu etkisinde karar vermeyin</li>
                        <li>Kendinizi güvende hissetmelisiniz</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Acil Durum ve Destek -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--spacing-md); margin-top: var(--spacing-lg);">
            <div class="info-card animate-fadeIn" style="animation-delay: 0.4s; border-left-color: #ef4444;">
                <h4 style="color: #ef4444;">🚨 Acil Durum Korunması (PEP)</h4>
                <p style="margin-bottom: var(--spacing-sm);">
                    <strong>Post-Exposure Prophylaxis (PEP):</strong> Riskli temastan sonra 72 saat içinde başlanmalı
                </p>
                <ul>
                    <li><strong>Ne zaman:</strong> Kondomsuz ilişki, kondom yırtılması, cinsel saldırı</li>
                    <li><strong>Nasıl:</strong> En yakın acil servise başvurun</li>
                    <li><strong>Süre:</strong> 28 gün boyunca ilaç kullanımı</li>
                    <li><strong>Etkinlik:</strong> İlk 24 saatte başlanırsa %80+ etkili</li>
                </ul>
                <div style="margin-top: var(--spacing-md); padding: var(--spacing-sm); background: rgba(239, 68, 68, 0.1); border-radius: 8px; border-left: 3px solid #ef4444;">
                    <strong style="color: #ef4444;">⚠️ Önemli:</strong> Zaman kaybetmeyin, hemen başvurun!
                </div>
            </div>

            <div class="info-card animate-fadeIn" style="animation-delay: 0.5s; border-left-color: var(--color-primary);">
                <h4 style="color: var(--color-primary);">🏥 Nereye Başvurmalı?</h4>
                <ul style="list-style: none; padding: 0;">
                    <li style="padding: var(--spacing-xs) 0; border-bottom: 1px solid var(--color-border);">
                        <strong>🏥 Aile Sağlığı Merkezleri</strong><br>
                        <span style="font-size: 0.9rem; color: var(--color-text-light);">Ücretsiz danışmanlık ve yönlendirme</span>
                    </li>
                    <li style="padding: var(--spacing-xs) 0; border-bottom: 1px solid var(--color-border);">
                        <strong>🏥 Devlet Hastaneleri</strong><br>
                        <span style="font-size: 0.9rem; color: var(--color-text-light);">Enfeksiyon Hastalıkları ve Dermatoloji</span>
                    </li>
                    <li style="padding: var(--spacing-xs) 0; border-bottom: 1px solid var(--color-border);">
                        <strong>🏥 Üniversite Hastaneleri</strong><br>
                        <span style="font-size: 0.9rem; color: var(--color-text-light);">Uzman kadro ve ileri tetkik imkanı</span>
                    </li>
                    <li style="padding: var(--spacing-xs) 0;">
                        <strong>📞 ALO 183</strong><br>
                        <span style="font-size: 0.9rem; color: var(--color-text-light);">Sağlık Bakanlığı Danışma Hattı (7/24)</span>
                    </li>
                </ul>
                <div style="margin-top: var(--spacing-md); padding: var(--spacing-sm); background: rgba(16, 185, 129, 0.1); border-radius: 8px; border-left: 3px solid var(--color-secondary);">
                    <strong style="color: var(--color-secondary);">✓ Gizlilik:</strong> Tüm testler ve tedaviler tamamen gizlidir
                </div>
            </div>
        </div>

    `;
}

// El yıkama simülasyonunu yükle
function loadHandwashTab() {
    const container = document.getElementById('handwashTab');
    
    container.innerHTML = `
        <div class="handwash-intro">
            <div class="info-card animate-fadeIn" style="text-align: center; border: none; background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%);">
                <h3 style="color: var(--color-primary); margin-bottom: var(--spacing-sm);">🧼 Doğru El Yıkama Tekniği</h3>
                <p style="font-size: 1.125rem; color: var(--color-text); max-width: 700px; margin: 0 auto;">
                    El yıkama, enfeksiyonlardan korunmanın en etkili ve basit yoludur. 
                    Aşağıdaki 5 adımı doğru şekilde uygulayarak kendinizi ve sevdiklerinizi koruyun.
                </p>

            </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1.3fr; gap: 2rem; align-items: start; margin-top: 3rem;">
            <div class="handwash-steps-container" style="margin: 0;">
            ${asepsisInfo.handHygiene.map((step, index) => `
                <div class="handwash-step-card animate-fadeIn" style="animation-delay: ${index * 0.1}s;">
                    <div class="step-number-badge">
                        <span class="step-number">${step.step}</span>
                    </div>
                    <div class="step-content">
                        <h4 class="step-title">${step.title}</h4>
                        <p class="step-description">${step.description}</p>
                    </div>
                </div>
            `).join('')}
            </div>
            
            <div class="video-container animate-fadeIn" style="animation-delay: 0.3s; position: sticky; top: 2rem;">
                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 16px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15); background: var(--color-bg-card);">
                    <video 
                        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 16px; object-fit: cover;" 
                        controls
                        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect fill='%23667eea' width='800' height='450'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='48' fill='white'%3E🧼 El Yıkama%3C/text%3E%3C/svg%3E">
                        <source src="video/el yıkama vidyosu.mp4" type="video/mp4">
                        Tarayıcınız video etiketini desteklemiyor.
                    </video>
                </div>
            </div>
        </div>


    `;
}

// ==========================================
// İlerleme Sayfası
// ==========================================

function loadProgressPage() {
    const container = document.getElementById('progressContent');
    const stats = progressManager.getStats();
    const allBadges = progressManager.getAllBadges();

    container.innerHTML = `
        <!-- Genel İstatistikler -->
        <div class="progress-card animate-fadeIn">
            <h3>📊 Genel İstatistikler</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: var(--spacing-md); margin-top: var(--spacing-md);">
                <div style="text-align: center;">
                    <div style="font-size: 2rem; font-weight: bold; color: var(--color-primary);">${stats.totalScore}</div>
                    <div style="color: var(--color-text-light);">Toplam Puan</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 2rem; font-weight: bold; color: var(--color-secondary);">${stats.quizzesCompleted}</div>
                    <div style="color: var(--color-text-light);">Tamamlanan Quiz</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 2rem; font-weight: bold; color: var(--color-warning);">${stats.scenariosCompleted}</div>
                    <div style="color: var(--color-text-light);">Tamamlanan Senaryo</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 2rem; font-weight: bold; color: var(--color-primary);">${stats.accuracy}%</div>
                    <div style="color: var(--color-text-light);">Doğruluk Oranı</div>
                </div>
            </div>
        </div>

        <!-- İlerleme Çubukları -->
        <div class="progress-card animate-fadeIn" style="animation-delay: 0.1s;">
            <h3>📈 İlerleme</h3>
            
            <div style="margin-bottom: var(--spacing-md);">
                <div style="display: flex; justify-content: space-between; margin-bottom: var(--spacing-xs);">
                    <span>Quiz İlerlemesi</span>
                    <span>${stats.quizzesCompleted} / 10</span>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar" style="width: ${Math.min((stats.quizzesCompleted / 10) * 100, 100)}%">
                        ${Math.min((stats.quizzesCompleted / 10) * 100, 100).toFixed(0)}%
                    </div>
                </div>
            </div>

            <div style="margin-bottom: var(--spacing-md);">
                <div style="display: flex; justify-content: space-between; margin-bottom: var(--spacing-xs);">
                    <span>Senaryo İlerlemesi</span>
                    <span>${stats.scenariosCompleted} / 10</span>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar" style="width: ${(stats.scenariosCompleted / 10) * 100}%">
                        ${((stats.scenariosCompleted / 10) * 100).toFixed(0)}%
                    </div>
                </div>
            </div>

            <div>
                <div style="display: flex; justify-content: space-between; margin-bottom: var(--spacing-xs);">
                    <span>Doğru Cevaplar</span>
                    <span>${stats.correctAnswers} / ${stats.totalAnswers}</span>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar" style="width: ${stats.accuracy}%">
                        ${stats.accuracy}%
                    </div>
                </div>
            </div>
        </div>

        <!-- Rozetler -->
        <div class="progress-card animate-fadeIn" style="animation-delay: 0.2s;">
            <h3>🏆 Rozetler</h3>
            <div class="badges-grid">
                ${allBadges.map(badge => {
                    const earned = stats.badges.includes(badge.id);
                    return `
                        <div class="badge ${earned ? 'earned' : ''}" title="${badge.description}">
                            <div class="badge-icon">${badge.icon}</div>
                            <div class="badge-name">${badge.name}</div>
                        </div>
                    `;
                }).join('')}
            </div>
            <p style="margin-top: var(--spacing-md); color: var(--color-text-light); text-align: center;">
                ${stats.badges.length} / ${allBadges.length} rozet kazanıldı
            </p>
        </div>

        <!-- Sıfırlama Butonu -->
        <div class="progress-card animate-fadeIn" style="animation-delay: 0.3s; text-align: center;">
            <button id="resetProgressBtn" class="btn btn-secondary">
                İlerlemeyi Sıfırla
            </button>
        </div>
    `;

    // Sıfırlama butonu event listener
    document.getElementById('resetProgressBtn')?.addEventListener('click', () => {
        if (progressManager.resetProgress()) {
            loadProgressPage();
        }
    });
}

// ==========================================
// Tema Yönetimi (Dark Mode)
// ==========================================

class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        // Kaydedilmiş temayı uygula
        this.applyTheme(this.theme);
        
        // Toggle butonu event listener
        document.getElementById('themeToggle')?.addEventListener('click', () => {
            this.toggleTheme();
        });
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.theme = theme;
        localStorage.setItem('theme', theme);
        
        // İkon güncelle
        const themeIcon = document.querySelector('.theme-icon');
        if (themeIcon) {
            themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
    }

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
        
        // Animasyon efekti
        document.body.style.animation = 'themeTransition 0.3s ease';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 300);
    }

    getTheme() {
        return this.theme;
    }
}

// Global theme manager instance
const themeManager = new ThemeManager();

// ==========================================
// Header Scroll Effect
// ==========================================
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 20) {
        header?.classList.add('scrolled');
    } else {
        header?.classList.remove('scrolled');
    }
});

// ==========================================
// Event Listeners ve Başlangıç
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Logo'ya tıklama
    document.querySelector('.logo')?.addEventListener('click', () => {
        showPage('homePage');
    });

    // Ana sayfa butonuna tıklama
    document.getElementById('homeBtn')?.addEventListener('click', () => {
        showPage('homePage');
    });

    // Navigasyon kartlarına tıklama (eski tasarım)
    document.querySelectorAll('.nav-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.tagName !== 'BUTTON') {
                const pageId = card.dataset.page + 'Page';
                showPage(pageId);
            }
        });

        // Kart içindeki butona tıklama
        card.querySelector('button')?.addEventListener('click', (e) => {
            e.stopPropagation();
            const pageId = card.dataset.page + 'Page';
            showPage(pageId);
        });
    });

    // Yeni tasarım - Feature kartlarına tıklama
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const pageId = card.dataset.page + 'Page';
            if (pageId) {
                showPage(pageId);
            }
        });
    });

    // Yeni tasarım - Hero CTA butonları
    document.querySelectorAll('.cta-primary, .cta-secondary').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const pageId = btn.dataset.page + 'Page';
            if (pageId) {
                showPage(pageId);
            }
        });
    });

    // Sekme butonları
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.dataset.tab;
            
            // Tüm sekme butonlarını pasif yap
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Tüm sekme içeriklerini gizle
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });

            // İlgili sekme içeriğini göster
            const tabContent = document.getElementById(tabName + 'Tab');
            if (tabContent) {
                tabContent.classList.add('active');
            }
        });
    });

    // İlk yükleme - Ana sayfayı göster
    showPage('homePage');
});

// Rozet bildirimi için CSS (dinamik olarak ekle)
const style = document.createElement('style');
style.textContent = `
    .badge-notification {
        position: fixed;
        top: 80px;
        right: 20px;
        background: #ffffff;
        color: #1e293b;
        padding: 24px;
        border-radius: 12px;
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        max-width: 300px;
        border: 2px solid #2563eb;
    }

    .badge-notification-content {
        display: flex;
        gap: 16px;
        align-items: center;
    }

    .badge-notification-icon {
        font-size: 3rem;
    }

    .badge-notification-text h4 {
        color: #2563eb;
        margin: 0 0 8px 0;
        font-size: 1rem;
    }

    .badge-notification-text p {
        margin: 0;
        font-size: 0.875rem;
        color: #1e293b;
    }

    .badge-notification-text strong {
        color: #10b981;
        font-weight: 700;
    }

    .badge-notification.fade-out {
        animation: fadeOut 0.3s ease forwards;
    }

    @media (max-width: 768px) {
        .badge-notification {
            right: 10px;
            left: 10px;
            max-width: none;
        }
    }

    /* Koyu Mod - Sabit Renkler */
    [data-theme="dark"] .badge-notification {
        background: #1e293b !important;
        border-color: #10b981 !important;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5) !important;
    }

    [data-theme="dark"] .badge-notification-text h4 {
        color: #10b981 !important;
    }

    [data-theme="dark"] .badge-notification-text p {
        color: #f1f5f9 !important;
    }

    [data-theme="dark"] .badge-notification-text strong {
        color: #2563eb !important;
    }
`;
document.head.appendChild(style);
