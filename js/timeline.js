// ==========================================
// CYBE Zaman Çizelgesi Modülü - Yeni
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
                time: "Hafta 1-3",
                title: "İnkübasyon",
                description: "Bakteri üreme organlarına yerleşir",
                symptoms: ["Genellikle belirti yok", "%70-80 vakada asemptomatik"],
                risk: "Bulaşıcı ama fark edilmez"
            },
            {
                time: "Hafta 2-6",
                title: "Erken Belirtiler",
                description: "Hafif belirtiler ortaya çıkabilir",
                symptoms: ["Ağrılı idrar yapma", "Anormal akıntı", "Hafif yanma"],
                risk: "Çok bulaşıcı"
            },
            {
                time: "Ay 1-6",
                title: "Aktif Enfeksiyon",
                description: "Tedavi edilmezse ilerler",
                symptoms: ["Alt karın ağrısı", "Cinsel ilişkide ağrı", "Kanama"],
                risk: "Bulaşıcı - komplikasyon riski"
            },
            {
                time: "Ay 6+",
                title: "Komplikasyonlar",
                description: "Tedavi edilmezse ciddi sorunlar",
                symptoms: ["Pelvik inflamatuar hastalık", "Kısırlık riski", "Kronik ağrı"],
                risk: "Kısırlığa yol açabilir"
            }
        ],
        warning: "Klamidya antibiyotikle kolayca tedavi edilir! Erken teşhis önemli."
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
                title: "İnkübasyon",
                description: "Bakteri hızla çoğalır",
                symptoms: ["Hafif rahatsızlık", "Erkeklerde daha erken belirti"],
                risk: "Bulaşıcı"
            },
            {
                time: "Hafta 1-2",
                title: "Akut Belirtiler",
                description: "Belirgin belirtiler ortaya çıkar",
                symptoms: ["Ağrılı idrar", "Sarı-yeşil akıntı", "Şişlik ve ağrı"],
                risk: "Çok bulaşıcı"
            },
            {
                time: "Hafta 2-4",
                title: "İlerleyen Enfeksiyon",
                description: "Tedavi edilmezse yayılır",
                symptoms: ["Testis ağrısı", "Pelvik ağrı", "Ateş"],
                risk: "Komplikasyon riski yüksek"
            },
            {
                time: "Ay 1+",
                title: "Komplikasyonlar",
                description: "Ciddi sağlık sorunları",
                symptoms: ["Kısırlık", "Eklem iltihabı", "Kalp problemleri"],
                risk: "Hayati tehlike olabilir"
            }
        ],
        warning: "Gonore antibiyotikle tedavi edilir ama direnç gelişiyor! Erken tedavi şart."
    },
    "Sifiliz": {
        icon: "🟣",
        stages: [
            {
                time: "Gün 0",
                title: "Bulaşma",
                description: "Bakteri cinsel temas veya yara ile geçer",
                symptoms: ["Belirti yok"],
                risk: "Bulaşıcı"
            },
            {
                time: "Hafta 3",
                title: "Birincil Sifiliz",
                description: "İlk yara (şankr) oluşur",
                symptoms: ["Ağrısız yara", "Lenf bezi şişmesi", "Yara 3-6 haftada iyileşir"],
                risk: "Çok bulaşıcı!"
            },
            {
                time: "Hafta 6-12",
                title: "İkincil Sifiliz",
                description: "Vücuda yayılır",
                symptoms: ["Deri döküntüleri", "Ateş", "Yorgunluk", "Saç dökülmesi"],
                risk: "Çok bulaşıcı!"
            },
            {
                time: "Yıl 1-10",
                title: "Latent (Gizli) Sifiliz",
                description: "Belirti vermez ama aktif",
                symptoms: ["Görünürde belirti yok", "Testler pozitif"],
                risk: "Bulaşıcılık azalır"
            },
            {
                time: "Yıl 10-30",
                title: "Üçüncül Sifiliz",
                description: "Organ hasarı başlar",
                symptoms: ["Kalp hasarı", "Beyin hasarı", "Körlük", "Felç"],
                risk: "Hayati tehlike"
            }
        ],
        warning: "Sifiliz erken dönemde penisilinle tamamen tedavi edilir! Geç kalınırsa kalıcı hasar olur."
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
                description: "Parazit üreme organlarına yerleşir",
                symptoms: ["Erkeklerde genellikle belirti yok", "Kadınlarda hafif rahatsızlık"],
                risk: "Bulaşıcı"
            },
            {
                time: "Hafta 1-4",
                title: "Aktif Belirtiler",
                description: "Belirtiler ortaya çıkar",
                symptoms: ["Köpüklü sarı-yeşil akıntı", "Kaşıntı ve yanma", "Kötü koku"],
                risk: "Çok bulaşıcı"
            },
            {
                time: "Ay 1-6",
                title: "Kronik Enfeksiyon",
                description: "Tedavi edilmezse devam eder",
                symptoms: ["Sürekli rahatsızlık", "Cinsel ilişkide ağrı", "İdrar enfeksiyonu"],
                risk: "Diğer CYBE riskini artırır"
            },
            {
                time: "Ay 6+",
                title: "Komplikasyonlar",
                description: "Uzun vadeli sorunlar",
                symptoms: ["Hamilelik komplikasyonları", "HIV bulaşma riski artar", "Kronik inflamasyon"],
                risk: "Tedavi edilmezse ciddi"
            }
        ],
        warning: "Trikomonas tek doz ilaçla kolayca tedavi edilir! Hem siz hem partneriniz tedavi olmalı."
    },
    "Genital Herpes": {
        icon: "🔴",
        stages: [
            {
                time: "Gün 0",
                title: "Bulaşma",
                description: "Virüs cilt teması ile geçer",
                symptoms: ["Belirti yok"],
                risk: "Bulaşıcı"
            },
            {
                time: "Gün 2-12",
                title: "İnkübasyon",
                description: "Virüs sinir hücrelerine yerleşir",
                symptoms: ["Hafif karıncalanma", "Kaşıntı hissi"],
                risk: "Bulaşıcı"
            },
            {
                time: "Gün 4-7",
                title: "İlk Atak (Primer)",
                description: "İlk belirtiler ortaya çıkar",
                symptoms: ["Ağrılı su toplaması", "Grip benzeri belirtiler", "Lenf bezi şişmesi"],
                risk: "Çok bulaşıcı!"
            },
            {
                time: "Hafta 2-4",
                title: "İyileşme",
                description: "Yaralar iyileşir",
                symptoms: ["Yaralar kabuklanır", "Ağrı azalır", "Belirtiler kaybolur"],
                risk: "Bulaşıcılık azalır"
            },
            {
                time: "Ömür Boyu",
                title: "Tekrarlayan Ataklar",
                description: "Virüs vücutta kalır",
                symptoms: ["Stres, hastalık, yorgunlukta tekrarlar", "Her atak daha hafif", "Yılda 2-5 atak"],
                risk: "Atak dönemlerinde bulaşıcı"
            }
        ],
        warning: "Herpes tedavi edilemez ama antiviral ilaçlar atakları azaltır! Atak döneminde cinsel ilişkiden kaçının."
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
                risk: "Bulaşıcı"
            },
            {
                time: "Ay 2-6",
                title: "Akut Hepatit C",
                description: "%20-30 vakada belirti verir",
                symptoms: ["Yorgunluk", "Hafif sarılık", "Karın ağrısı"],
                risk: "Bulaşıcı"
            },
            {
                time: "Ay 6+",
                title: "Kronik Hepatit C",
                description: "%75-85 vakada kronikleşir",
                symptoms: ["Çoğu zaman belirti yok", "Hafif yorgunluk", "Karaciğer hasarı sessizce ilerler"],
                risk: "Bulaşıcı - tedavi gerekli"
            },
            {
                time: "Yıl 20-30",
                title: "Siroz ve Kanser",
                description: "Tedavi edilmezse ciddi hasar",
                symptoms: ["Karaciğer sirozu", "Karaciğer kanseri", "Karaciğer yetmezliği"],
                risk: "Hayati tehlike"
            }
        ],
        warning: "Hepatit C artık tedavi edilebilir! Yeni ilaçlar %95 iyileşme sağlar. Erken teşhis hayat kurtarır."
    },
    "Mikoplazma ve Ureaplazma": {
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
                time: "Hafta 1-3",
                title: "İnkübasyon",
                description: "Bakteri üreme organlarına yerleşir",
                symptoms: ["Çoğu zaman belirti yok", "Hafif rahatsızlık olabilir"],
                risk: "Bulaşıcı ama fark edilmez"
            },
            {
                time: "Hafta 2-4",
                title: "Hafif Belirtiler",
                description: "Belirti verebilir veya vermeyebilir",
                symptoms: ["Hafif akıntı", "İdrar yaparken yanma", "Pelvik rahatsızlık"],
                risk: "Bulaşıcı"
            },
            {
                time: "Ay 1-6",
                title: "Kronik Enfeksiyon",
                description: "Tedavi edilmezse devam eder",
                symptoms: ["Tekrarlayan idrar yolu enfeksiyonu", "Kronik pelvik ağrı", "Cinsel ilişkide rahatsızlık"],
                risk: "Komplikasyon riski"
            },
            {
                time: "Ay 6+",
                title: "Komplikasyonlar",
                description: "Özellikle hamilelikte riskli",
                symptoms: ["Hamilelik komplikasyonları", "Erken doğum riski", "Kısırlık riski"],
                risk: "Hamilelik öncesi tedavi önemli"
            }
        ],
        warning: "Mikoplazma ve Ureaplazma antibiyotikle tedavi edilir! Hamilelik planlıyorsanız mutlaka test olun."
    }
};

// Timeline gösterme fonksiyonu
function showTimeline(diseaseName) {
    const container = document.getElementById('timelineContent');
    const data = timelineData[diseaseName];
    
    if (!container || !data) {
        console.error('Timeline container veya data bulunamadı');
        return;
    }

    // Container'ı temizle
    container.innerHTML = '';

    // Her aşama için kart oluştur
    data.stages.forEach((stage, index) => {
        // Stage kartı
        const stageDiv = document.createElement('div');
        stageDiv.className = 'timeline-stage animate-fadeIn';
        stageDiv.style.animationDelay = `${index * 0.1}s`;

        // Marker (numara)
        const marker = document.createElement('div');
        marker.className = 'timeline-marker';
        marker.textContent = index + 1;

        // Info container
        const infoDiv = document.createElement('div');
        infoDiv.className = 'timeline-info';

        // Başlık
        const title = document.createElement('h3');
        title.textContent = stage.title;

        // Zaman
        const time = document.createElement('h4');
        time.innerHTML = `⏱️ ${stage.time}`;

        // Açıklama
        const desc = document.createElement('p');
        desc.innerHTML = `<strong>${stage.description}</strong>`;

        // Belirtiler listesi
        const symptomsList = document.createElement('ul');
        stage.symptoms.forEach(symptom => {
            const li = document.createElement('li');
            li.textContent = symptom;
            symptomsList.appendChild(li);
        });

        // Risk uyarısı
        const riskDiv = document.createElement('div');
        riskDiv.innerHTML = `<strong>⚠️ ${stage.risk}</strong>`;

        // Hepsini birleştir
        infoDiv.appendChild(title);
        infoDiv.appendChild(time);
        infoDiv.appendChild(desc);
        infoDiv.appendChild(symptomsList);
        infoDiv.appendChild(riskDiv);

        stageDiv.appendChild(marker);
        stageDiv.appendChild(infoDiv);

        container.appendChild(stageDiv);
    });

    // Uyarı mesajı
    const warningDiv = document.createElement('div');
    warningDiv.className = 'timeline-warning animate-fadeIn';
    warningDiv.style.animationDelay = `${data.stages.length * 0.1}s`;
    warningDiv.innerHTML = `<strong>💡 Önemli:</strong> ${data.warning}`;
    container.appendChild(warningDiv);
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    const diseaseSelect = document.getElementById('diseaseSelect');
    
    if (!diseaseSelect) {
        console.error('Disease select element bulunamadı');
        return;
    }

    // Hastalıkları dropdown'a ekle
    Object.keys(timelineData).forEach(diseaseName => {
        const option = document.createElement('option');
        option.value = diseaseName;
        option.textContent = `${timelineData[diseaseName].icon} ${diseaseName}`;
        diseaseSelect.appendChild(option);
    });

    // Seçim değiştiğinde
    diseaseSelect.addEventListener('change', (e) => {
        const selectedDisease = e.target.value;
        const container = document.getElementById('timelineContent');
        
        if (selectedDisease && selectedDisease !== '') {
            showTimeline(selectedDisease);
        } else {
            // Boş seçim - empty state göster
            container.innerHTML = `
                <div class="timeline-empty">
                    <div class="timeline-empty-icon">⏱️</div>
                    <p>Yukarıdan bir hastalık seçerek zaman çizelgesini görüntüleyin</p>
                </div>
            `;
        }
    });
});
