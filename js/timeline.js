// ==========================================
// CYBE Zaman Çizelgesi Modülü
// ==========================================

const timelineData = {
    "HIV/AIDS": {
        icon: "🔴",
        stages: [
            {
                time: "Gün 0",
                title: "Bulaşma Anı",
                description: "Virüs vücuda girer",
                symptoms: ["Belirti yok", "Virüs kan dolaşımına karışır"],
                risk: "Bulaşıcı değil (henüz)"
            },
            {
                time: "Gün 1-14",
                title: "Pencere Dönemi",
                description: "Virüs çoğalmaya başlar",
                symptoms: ["Testler negatif çıkabilir", "Belirti genellikle yok"],
                risk: "Bulaşıcı ama test negatif!"
            },
            {
                time: "2-4 Hafta",
                title: "Akut HIV Sendromu",
                description: "İlk belirtiler ortaya çıkar",
                symptoms: ["Grip benzeri belirtiler", "Ateş, yorgunluk", "Lenf bezi şişmesi"],
                risk: "Çok bulaşıcı!"
            },
            {
                time: "Ay 1-10 Yıl",
                title: "Asemptomatik Dönem",
                description: "Belirti vermez ama virüs aktif",
                symptoms: ["Görünürde sağlıklı", "Bağışıklık sistemi yavaşça zayıflar"],
                risk: "Bulaşıcı - test pozitif"
            },
            {
                time: "Yıl 10+",
                title: "AIDS Dönemi",
                description: "Bağışıklık sistemi çöker",
                symptoms: ["Fırsatçı enfeksiyonlar", "Ciddi hastalıklar", "Kilo kaybı"],
                risk: "Hayati tehlike"
            }
        ],
        warning: "Erken teşhis hayat kurtarır! Tedavi ile normal yaşam sürdürülebilir."
    },
    "HPV": {
        icon: "🟡",
        stages: [
            {
                time: "Gün 0",
                title: "Bulaşma",
                description: "Cilt teması ile virüs geçer",
                symptoms: ["Belirti yok"],
                risk: "Bulaşıcı"
            },
            {
                time: "Hafta 2-8",
                title: "İnkübasyon",
                description: "Virüs hücrelere yerleşir",
                symptoms: ["Belirti yok", "Bağışıklık sistemi tepki verir"],
                risk: "Bulaşıcı"
            },
            {
                time: "Ay 2-6",
                title: "Siğil Oluşumu",
                description: "Genital siğiller görünebilir",
                symptoms: ["Küçük siğiller", "Kaşıntı olabilir"],
                risk: "Bulaşıcı"
            },
            {
                time: "Yıl 1-2",
                title: "Bağışıklık Tepkisi",
                description: "Vücut virüsü temizlemeye çalışır",
                symptoms: ["%90 vakada virüs kendiliğinden temizlenir", "Siğiller kaybolabilir"],
                risk: "Azalan bulaşıcılık"
            },
            {
                time: "Yıl 10-20",
                title: "Yüksek Riskli HPV",
                description: "Bazı tipler kansere yol açabilir",
                symptoms: ["Rahim ağzı hücre değişiklikleri", "Kanser riski"],
                risk: "Düzenli tarama önemli!"
            }
        ],
        warning: "HPV aşısı %90 koruma sağlar! 9-26 yaş arası aşı olun."
    },
    "Hepatit B": {
        icon: "🟠",
        stages: [
            {
                time: "Gün 0",
                title: "Bulaşma",
                description: "Virüs kan/vücut sıvıları ile geçer",
                symptoms: ["Belirti yok"],
                risk: "Bulaşıcı"
            },
            {
                time: "Hafta 6-12",
                title: "İnkübasyon",
                description: "Virüs karaciğere yerleşir",
                symptoms: ["Belirti yok", "Testler pozitif olabilir"],
                risk: "Bulaşıcı"
            },
            {
                time: "Ay 2-6",
                title: "Akut Hepatit",
                description: "Karaciğer iltihaplanır",
                symptoms: ["Sarılık", "Yorgunluk", "Karın ağrısı", "Koyu idrar"],
                risk: "Çok bulaşıcı"
            },
            {
                time: "Ay 6+",
                title: "Kronik Hepatit",
                description: "%5-10 vakada kronikleşir",
                symptoms: ["Hafif veya belirti yok", "Karaciğer hasarı devam eder"],
                risk: "Bulaşıcı - tedavi gerekli"
            },
            {
                time: "Yıl 20-30",
                title: "Siroz/Kanser Riski",
                description: "Tedavi edilmezse ciddi hasar",
                symptoms: ["Karaciğer sirozu", "Karaciğer kanseri riski"],
                risk: "Hayati tehlike"
            }
        ],
        warning: "Hepatit B aşısı %95 koruma sağlar! Mutlaka aşı olun."
    },
    "Klamidya": {
        icon: "🔵",
        stages: [
            {
                time: "Gün 0",
                title: "Bulaşma",
                description: "Bakteri cinsel temas ile geçer",
                symptoms: ["Belirti yok"],
                risk: "Bulaşıcı"
            },
            {
                time: "Gün 7-21",
                title: "İnkübasyon",
                description: "Bakteri çoğalır",
                symptoms: ["%70-80 vakada belirti yok!", "Hafif yanma olabilir"],
                risk: "Bulaşıcı ama farkında değil"
            },
            {
                time: "Hafta 2-4",
                title: "Belirtiler (varsa)",
                description: "Bazı vakalarda belirti görülür",
                symptoms: ["Ağrılı idrar", "Akıntı", "Alt karın ağrısı"],
                risk: "Bulaşıcı"
            },
            {
                time: "Ay 1-6",
                title: "Tedavi Edilmezse",
                description: "Enfeksiyon yayılır",
                symptoms: ["Pelvik inflamatuar hastalık", "Ağrı artar"],
                risk: "Kısırlık riski başlar"
            },
            {
                time: "Yıl 1+",
                title: "Komplikasyonlar",
                description: "Ciddi sorunlar gelişir",
                symptoms: ["Kısırlık", "Kronik ağrı", "Ektopik gebelik riski"],
                risk: "Kalıcı hasar"
            }
        ],
        warning: "Belirti olmasa da test yaptırın! Tedavi ile %95 iyileşme."
    },
    "Gonore": {
        icon: "🟢",
        stages: [
            {
                time: "Gün 0",
                title: "Bulaşma",
                description: "Bakteri cinsel temas ile geçer",
                symptoms: ["Belirti yok"],
                risk: "Bulaşıcı"
            },
            {
                time: "Gün 2-7",
                title: "Hızlı Gelişim",
                description: "Gonore hızlı belirti verir",
                symptoms: ["Yanma başlar", "Akıntı başlar"],
                risk: "Çok bulaşıcı"
            },
            {
                time: "Hafta 1-2",
                title: "Akut Belirtiler",
                description: "Belirtiler belirginleşir",
                symptoms: ["Sarı-yeşil akıntı", "Ağrılı idrar", "Şişlik"],
                risk: "Çok bulaşıcı"
            },
            {
                time: "Hafta 2-4",
                title: "Yayılma",
                description: "Tedavi edilmezse yayılır",
                symptoms: ["Testis/yumurtalık iltihabı", "Ateş", "Şiddetli ağrı"],
                risk: "Kısırlık riski"
            },
            {
                time: "Ay 1+",
                title: "Komplikasyonlar",
                description: "Ciddi sorunlar",
                symptoms: ["Kısırlık", "Eklem iltihabı", "Kalp kapak enfeksiyonu"],
                risk: "Hayati tehlike olabilir"
            }
        ],
        warning: "Hızlı tedavi önemli! Antibiyotik direnci gelişebilir."
    },
    "Sifiliz": {
        icon: "🟣",
        stages: [
            {
                time: "Gün 0",
                title: "Bulaşma",
                description: "Bakteri yara teması ile geçer",
                symptoms: ["Belirti yok"],
                risk: "Bulaşıcı"
            },
            {
                time: "Hafta 3",
                title: "Birincil Sifiliz",
                description: "İlk yara (şankr) çıkar",
                symptoms: ["Ağrısız yara", "Lenf bezi şişmesi"],
                risk: "Çok bulaşıcı"
            },
            {
                time: "Hafta 6-12",
                title: "İkincil Sifiliz",
                description: "Vücuda yayılır",
                symptoms: ["Deri döküntüleri", "Ateş", "Yorgunluk", "Saç dökülmesi"],
                risk: "Çok bulaşıcı"
            },
            {
                time: "Yıl 1-20",
                title: "Latent (Gizli) Sifiliz",
                description: "Belirti vermez ama aktif",
                symptoms: ["Belirti yok", "Test pozitif"],
                risk: "Az bulaşıcı ama tehlikeli"
            },
            {
                time: "Yıl 10-30",
                title: "Üçüncül Sifiliz",
                description: "Organlar hasar görür",
                symptoms: ["Kalp hasarı", "Beyin hasarı", "Körlük", "Felç"],
                risk: "Hayati tehlike"
            }
        ],
        warning: "Erken tedavi %100 iyileşme! Geç tedavi kalıcı hasar bırakır."
    },
    "Trikomonas": {
        icon: "🔵",
        stages: [
            {
                time: "Gün 0",
                title: "Bulaşma",
                description: "Parazit cinsel temas ile geçer",
                symptoms: ["Belirti yok"],
                risk: "Bulaşıcı"
            },
            {
                time: "Gün 5-28",
                title: "İnkübasyon",
                description: "Parazit çoğalmaya başlar",
                symptoms: ["Çoğu vakada belirti yok", "Hafif rahatsızlık olabilir"],
                risk: "Bulaşıcı ama farkında değil"
            },
            {
                time: "Hafta 1-4",
                title: "Belirtiler Başlar",
                description: "Karakteristik belirtiler ortaya çıkar",
                symptoms: ["Köpüklü sarı-yeşil akıntı", "Genital kaşıntı", "Yanma hissi", "Kötü koku"],
                risk: "Çok bulaşıcı"
            },
            {
                time: "Ay 1-6",
                title: "Kronik Enfeksiyon",
                description: "Tedavi edilmezse devam eder",
                symptoms: ["Belirtiler devam eder", "Cinsel ilişkide ağrı", "İdrar yaparken yanma"],
                risk: "Diğer CYBE'lere açık hale gelir"
            },
            {
                time: "Ay 6+",
                title: "Komplikasyonlar",
                description: "Uzun vadeli sorunlar",
                symptoms: ["Pelvik inflamatuar hastalık", "Hamilelikte erken doğum riski", "HIV bulaşma riski artar"],
                risk: "Kısırlık ve komplikasyon riski"
            }
        ],
        warning: "Tek doz ilaçla tedavi edilir! Partner tedavisi şart."
    },
    "Genital Herpes": {
        icon: "🔴",
        stages: [
            {
                time: "Gün 0",
                title: "Bulaşma",
                description: "Virüs cilt teması ile geçer",
                symptoms: ["Belirti yok"],
                risk: "Bulaşıcı (özellikle aktif yara varsa)"
            },
            {
                time: "Gün 2-12",
                title: "İnkübasyon",
                description: "Virüs sinir hücrelerine yerleşir",
                symptoms: ["Hafif karıncalanma", "Kaşıntı başlayabilir"],
                risk: "Bulaşıcı"
            },
            {
                time: "Gün 4-7",
                title: "İlk Atak (Primer)",
                description: "İlk su toplamaları çıkar",
                symptoms: ["Ağrılı su toplamaları", "Ateş, baş ağrısı", "Lenf bezi şişmesi", "Grip benzeri belirtiler"],
                risk: "Çok bulaşıcı!"
            },
            {
                time: "Hafta 2-4",
                title: "İyileşme",
                description: "Yaralar iyileşir ama virüs kalır",
                symptoms: ["Yaralar kabuklanır", "Ağrı azalır", "Virüs sinir köklerinde saklanır"],
                risk: "Azalan bulaşıcılık"
            },
            {
                time: "Ömür Boyu",
                title: "Tekrarlayan Ataklar",
                description: "Virüs periyodik olarak aktifleşir",
                symptoms: ["Yılda 4-5 kez atak", "Stres, hastalık, güneş tetikler", "Her atak daha hafif"],
                risk: "Atak dönemlerinde bulaşıcı"
            }
        ],
        warning: "Tedavi yok ama antiviral ilaçlar atakları azaltır. Kondom kısmi koruma sağlar."
    },
    "Hepatit C": {
        icon: "🟠",
        stages: [
            {
                time: "Gün 0",
                title: "Bulaşma",
                description: "Virüs kan yoluyla geçer",
                symptoms: ["Belirti yok"],
                risk: "Bulaşıcı"
            },
            {
                time: "Hafta 2-12",
                title: "İnkübasyon",
                description: "Virüs karaciğere yerleşir",
                symptoms: ["Belirti yok", "Testler negatif olabilir"],
                risk: "Bulaşıcı ama test negatif"
            },
            {
                time: "Ay 2-6",
                title: "Akut Hepatit C",
                description: "%20-30 vakada belirti verir",
                symptoms: ["Yorgunluk", "Karın ağrısı", "Sarılık (nadir)", "İştahsızlık"],
                risk: "Bulaşıcı"
            },
            {
                time: "Ay 6+",
                title: "Kronik Hepatit C",
                description: "%75-85 vakada kronikleşir",
                symptoms: ["Çoğu zaman belirti yok", "Hafif yorgunluk", "Karaciğer enzimleri yüksek"],
                risk: "Bulaşıcı - sessiz hasar"
            },
            {
                time: "Yıl 20-30",
                title: "Siroz ve Kanser",
                description: "Tedavi edilmezse ciddi hasar",
                symptoms: ["Karaciğer sirozu (%20)", "Karaciğer kanseri riski", "Karaciğer yetmezliği"],
                risk: "Hayati tehlike"
            }
        ],
        warning: "Modern ilaçlarla %95+ iyileşme! Erken teşhis çok önemli."
    },
    "Mikoplazma/Ureaplazma": {
        icon: "🟣",
        stages: [
            {
                time: "Gün 0",
                title: "Bulaşma",
                description: "Bakteri cinsel temas ile geçer",
                symptoms: ["Belirti yok"],
                risk: "Bulaşıcı"
            },
            {
                time: "Gün 7-21",
                title: "İnkübasyon",
                description: "Bakteri üreme yollarına yerleşir",
                symptoms: ["Çoğu vakada belirti yok", "Hafif rahatsızlık olabilir"],
                risk: "Bulaşıcı ama farkında değil"
            },
            {
                time: "Hafta 2-4",
                title: "Hafif Belirtiler",
                description: "Belirti verenler azınlıkta",
                symptoms: ["Hafif akıntı", "İdrar yaparken hafif yanma", "Genital bölgede rahatsızlık"],
                risk: "Bulaşıcı"
            },
            {
                time: "Ay 1-6",
                title: "Kronik Taşıyıcılık",
                description: "Tedavi edilmezse devam eder",
                symptoms: ["Belirti olmadan taşıyıcılık", "Ara sıra hafif belirtiler", "Partner enfeksiyonu"],
                risk: "Sessiz bulaşma"
            },
            {
                time: "Ay 6+",
                title: "Komplikasyonlar",
                description: "Özellikle hamilelikte riskli",
                symptoms: ["Pelvik inflamatuar hastalık", "Hamilelikte erken doğum", "Kısırlık riski", "Prostat iltihabı (erkek)"],
                risk: "Üreme sağlığı riski"
            }
        ],
        warning: "Hamilelik öncesi tarama önemli! Antibiyotikle kolayca tedavi edilir."
    }
};

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    const diseaseSelect = document.getElementById('diseaseSelect');

    if (diseaseSelect) {
        // Hastalıkları dropdown'a ekle
        Object.keys(timelineData).forEach(disease => {
            const option = document.createElement('option');
            option.value = disease;
            option.textContent = `${timelineData[disease].icon} ${disease}`;
            diseaseSelect.appendChild(option);
        });

        // Seçim değiştiğinde
        diseaseSelect.addEventListener('change', (e) => {
            const disease = e.target.value;
            if (disease) {
                showTimeline(disease);
            } else {
                document.getElementById('timelineContent').innerHTML = '';
            }
        });
    }
});

function showTimeline(disease) {
    const data = timelineData[disease];
    const container = document.getElementById('timelineContent');

    if (!data) return;

    let html = '';

    // Her aşama için
    data.stages.forEach((stage, index) => {
        html += `
            <div class="timeline-stage reveal">
                <div class="timeline-marker">${index + 1}</div>
                <div class="timeline-info">
                    <h3 class="stagger-item">${stage.title}</h3>
                    <h4 class="stagger-item"><span class="pulse-icon">⏱️</span> ${stage.time}</h4>
                    <p class="stagger-item"><strong>${stage.description}</strong></p>
                    <ul class="stagger-item">
                        ${stage.symptoms.map(s => `<li>${s}</li>`).join('')}
                    </ul>
                    <div class="stagger-item" style="margin-top: var(--spacing-sm); padding: var(--spacing-xs) var(--spacing-sm); background: rgba(239, 68, 68, 0.1); border-radius: var(--radius-sm); color: var(--color-error); font-weight: 600;">
                        <span class="pulse-icon">⚠️</span> ${stage.risk}
                    </div>
                </div>
            </div>
        `;
    });

    // Uyarı mesajı
    html += `
        <div class="timeline-warning reveal">
            <span class="pulse-icon">💡</span> <strong>Önemli:</strong> ${data.warning}
        </div>
    `;

    container.innerHTML = html;

    // Scroll Reveal Observer
    initScrollReveal();
}

function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    // Aynı anda ekrana girenleri sıraya dizmek için kuyruk
    let revealQueue = [];
    let isProcessing = false;

    const processQueue = () => {
        if (revealQueue.length === 0) {
            isProcessing = false;
            return;
        }
        isProcessing = true;
        const nextEl = revealQueue.shift();
        nextEl.classList.add('active');

        // Her eleman arasında 300ms "slow" geçiş bekle
        setTimeout(processQueue, 300);
    };

    const observer = new IntersectionObserver((entries) => {
        // Ekrana girenleri listeye ekle ve dikey konumlarına göre sırala
        const intersectingEntries = entries
            .filter(entry => entry.isIntersecting)
            .sort((a, b) => a.target.offsetTop - b.target.offsetTop);

        intersectingEntries.forEach(entry => {
            if (!entry.target.classList.contains('active') && !revealQueue.includes(entry.target)) {
                revealQueue.push(entry.target);
                observer.unobserve(entry.target);
            }
        });

        if (!isProcessing && revealQueue.length > 0) {
            processQueue();
        }
    }, observerOptions);

    // Tüm reveal elemanlarını izle
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
