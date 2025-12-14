// ==========================================
// Quiz Soruları ve İçerik Verisi
// ==========================================

const quizData = [
    {
        id: 1,
        question: "HIV virüsü hangi yollarla bulaşmaz?",
        options: [
            "Korunmasız cinsel ilişki",
            "Tokalaşma ve sarılma",
            "Enfekte kan transfüzyonu",
            "Anneden bebeğe geçiş"
        ],
        correctAnswer: 1,
        explanation: "HIV virüsü günlük sosyal temas yoluyla (tokalaşma, sarılma, öpüşme) bulaşmaz. Sadece kan, cinsel sıvılar ve anne sütü yoluyla bulaşır.",
        category: "cybe"
    },
    {
        id: 2,
        question: "HPV aşısı hangi yaş aralığında en etkilidir?",
        options: [
            "40-50 yaş arası",
            "9-26 yaş arası",
            "60 yaş üzeri",
            "Sadece 18 yaşında"
        ],
        correctAnswer: 1,
        explanation: "HPV aşısı 9-26 yaş aralığında en etkilidir ve cinsel aktivite başlamadan önce yapılması önerilir.",
        category: "cybe"
    },
    {
        id: 3,
        question: "Hepatit B virüsüne karşı en etkili korunma yöntemi nedir?",
        options: [
            "Antibiyotik kullanımı",
            "Aşılama",
            "Vitamin takviyesi",
            "Sadece hijyenik yaşam"
        ],
        correctAnswer: 1,
        explanation: "Hepatit B'ye karşı en etkili korunma yöntemi aşılamadır. Aşı %95 oranında koruma sağlar.",
        category: "cybe"
    },
    {
        id: 4,
        question: "Klamidya enfeksiyonunun en yaygın belirtisi nedir?",
        options: [
            "Yüksek ateş ve baş ağrısı",
            "Genellikle belirti vermez (asemptomatik)",
            "Şiddetli karın ağrısı",
            "Deri döküntüleri"
        ],
        correctAnswer: 1,
        explanation: "Klamidya enfeksiyonu çoğu zaman belirti vermez, bu nedenle düzenli tarama önemlidir.",
        category: "cybe"
    },
    {
        id: 5,
        question: "Gonore (Bel soğukluğu) tedavi edilmezse hangi komplikasyona yol açabilir?",
        options: [
            "Kısırlık",
            "Diyabet",
            "Hipertansiyon",
            "Astım"
        ],
        correctAnswer: 0,
        explanation: "Tedavi edilmeyen gonore, hem erkeklerde hem kadınlarda kısırlığa yol açabilir.",
        category: "cybe"
    },
    {
        id: 6,
        question: "Sifiliz hangi aşamada en bulaşıcıdır?",
        options: [
            "Üçüncül (geç) dönem",
            "Birincil ve ikincil dönem",
            "Latent (gizli) dönem",
            "Hiçbir dönemde bulaşıcı değildir"
        ],
        correctAnswer: 1,
        explanation: "Sifiliz birincil ve ikincil dönemde en bulaşıcıdır. Bu dönemlerde yara ve döküntüler görülür.",
        category: "cybe"
    },
    {
        id: 7,
        question: "Kondom kullanımı hangi CYBE'lere karşı %100 koruma sağlar?",
        options: [
            "Tüm CYBE'lere karşı %100 korur",
            "Hiçbirine karşı koruma sağlamaz",
            "Tam koruma sağlamaz ama riski önemli ölçüde azaltır",
            "Sadece HIV'e karşı korur"
        ],
        correctAnswer: 2,
        explanation: "Kondom doğru kullanıldığında CYBE riskini önemli ölçüde azaltır ancak %100 koruma sağlamaz. Yine de en etkili korunma yöntemlerinden biridir.",
        category: "cybe"
    },
    {
        id: 8,
        question: "Asepsi nedir?",
        options: [
            "Mikroorganizmaların tamamen yok edilmesi",
            "Mikroorganizmaların bulunmaması veya bulaşmasının önlenmesi",
            "Sadece bakterilerin temizlenmesi",
            "Antibiyotik kullanımı"
        ],
        correctAnswer: 1,
        explanation: "Asepsi, mikroorganizmaların bulunmaması veya bulaşmasının önlenmesi için alınan önlemlerdir.",
        category: "asepsi"
    },
    {
        id: 9,
        question: "Ellerin doğru yıkanma süresi en az kaç saniye olmalıdır?",
        options: [
            "5 saniye",
            "10 saniye",
            "20 saniye",
            "60 saniye"
        ],
        correctAnswer: 2,
        explanation: "Eller en az 20 saniye boyunca sabun ve suyla yıkanmalıdır. Bu süre 'İki kere Mutlu Yıllar' şarkısını söyleme süresi kadardır.",
        category: "asepsi"
    },
    {
        id: 10,
        question: "Sterilizasyon ile dezenfeksiyon arasındaki fark nedir?",
        options: [
            "Aynı şeylerdir",
            "Sterilizasyon tüm mikroorganizmaları yok eder, dezenfeksiyon çoğunu azaltır",
            "Dezenfeksiyon daha etkilidir",
            "Sterilizasyon sadece bakterileri öldürür"
        ],
        correctAnswer: 1,
        explanation: "Sterilizasyon tüm mikroorganizmaları (sporlar dahil) yok ederken, dezenfeksiyon çoğu mikroorganizmayı azaltır veya yok eder.",
        category: "asepsi"
    },
    {
        id: 11,
        question: "Hangi durumlarda mutlaka el yıkanmalıdır?",
        options: [
            "Sadece tuvaletten sonra",
            "Sadece yemekten önce",
            "Tuvalet sonrası, yemek öncesi/sonrası, hasta ziyareti sonrası",
            "Günde bir kez yeterlidir"
        ],
        correctAnswer: 2,
        explanation: "El yıkama tuvaletten sonra, yemekten önce ve sonra, hasta ziyareti sonrası, öksürme/hapşırma sonrası mutlaka yapılmalıdır.",
        category: "asepsi"
    },
    {
        id: 12,
        question: "Bakteriler hangi ortamda en hızlı çoğalır?",
        options: [
            "Soğuk ve kuru ortam",
            "Sıcak ve nemli ortam",
            "Aşırı sıcak ortam",
            "Donmuş ortam"
        ],
        correctAnswer: 1,
        explanation: "Bakteriler sıcak (20-40°C) ve nemli ortamlarda en hızlı çoğalır. Bu nedenle hijyen ve uygun saklama koşulları önemlidir.",
        category: "mikrobiyoloji"
    },
    {
        id: 13,
        question: "Virüsler ve bakteriler arasındaki temel fark nedir?",
        options: [
            "Virüsler daha büyüktür",
            "Virüsler canlı hücre içinde çoğalır, bakteriler bağımsız çoğalabilir",
            "Bakteriler antibiyotikle tedavi edilemez",
            "Hiçbir fark yoktur"
        ],
        correctAnswer: 1,
        explanation: "Virüsler canlı hücre içinde çoğalırken, bakteriler bağımsız olarak çoğalabilir. Bu nedenle tedavi yöntemleri farklıdır.",
        category: "mikrobiyoloji"
    },
    {
        id: 14,
        question: "Düzenli CYBE taraması neden önemlidir?",
        options: [
            "Sadece belirtisi olanlar test olmalıdır",
            "Çoğu CYBE belirti vermez, erken teşhis tedaviyi kolaylaştırır",
            "Test olmaya gerek yoktur",
            "Sadece yaşlılar test olmalıdır"
        ],
        correctAnswer: 1,
        explanation: "Birçok CYBE belirti vermez veya geç belirti verir. Düzenli tarama erken teşhis ve tedavi için kritik öneme sahiptir.",
        category: "cybe"
    },
    {
        id: 15,
        question: "Cinsel sağlık konusunda bilgi almak için en güvenilir kaynak hangisidir?",
        options: [
            "Sosyal medya paylaşımları",
            "Sağlık profesyonelleri ve resmi sağlık kuruluşları",
            "Arkadaş tavsiyeleri",
            "İnternet forumları"
        ],
        correctAnswer: 1,
        explanation: "Cinsel sağlık konusunda en güvenilir bilgi kaynağı sağlık profesyonelleri ve T.C. Sağlık Bakanlığı, DSÖ gibi resmi kuruluşlardır.",
        category: "cybe"
    }
];

// ==========================================
// Senaryo Verileri
// ==========================================

const scenariosData = [
    {
        id: 1,
        title: "Yeni İlişki Başlangıcı",
        description: "Yeni bir ilişkiye başlıyorsunuz",
        icon: "💑",
        difficulty: "Kolay",
        situation: "Ayşe ve Mehmet 3 aydır birlikte ve ilişkilerini bir sonraki aşamaya taşımayı düşünüyorlar. Ayşe, cinsel sağlık konusunda endişeli ve ne yapması gerektiğinden emin değil. Mehmet de bu konuda bilgili olmak istiyor.",
        choices: [
            {
                text: "İkisi de CYBE testi yaptırmalı ve sonuçları paylaşmalı",
                outcome: "Mükemmel karar! İkiniz de test yaptırarak birbirinize saygı gösterdiniz ve sağlıklı bir ilişki temeli oluşturdunuz. Bu açık iletişim ilişkinizi güçlendirecektir.",
                isCorrect: true,
                explanation: "Yeni bir cinsel ilişkiye başlamadan önce her iki partnerin de CYBE testi yaptırması ve sonuçları paylaşması en sağlıklı yaklaşımdır. Bu hem güven oluşturur hem de sağlığınızı korur. Açık iletişim sağlıklı ilişkilerin temelidir."
            },
            {
                text: "Test yaptırmaya gerek yok, sadece kondom kullanmak yeterli",
                outcome: "Kondom kullanmak önemli ama yeterli değil. Test yaptırmak daha güvenli bir başlangıç sağlar ve her iki partnerin de sağlık durumunu bilmesi önemlidir.",
                isCorrect: false,
                explanation: "Kondom kullanımı önemli bir koruma yöntemidir ancak %100 koruma sağlamaz. Ayrıca bazı CYBE'ler (HPV gibi) kondomla tam korunamaz. Test yaptırmak en güvenli yaklaşımdır ve ilişkiye sağlıklı başlamanızı sağlar."
            },
            {
                text: "Birbirlerine güveniyorlarsa test yaptırmaya gerek yok",
                outcome: "Güven önemlidir ama sağlık konusunda risk almamak gerekir. Birçok CYBE belirti vermez ve kişi enfekte olduğunu bilmeyebilir.",
                isCorrect: false,
                explanation: "Güven ilişkinin temelidir ancak birçok CYBE belirti vermez ve kişi enfekte olduğunu bilmeyebilir. Test yaptırmak güvensizlik değil, sorumluluk göstergesidir. Sağlık konusunda bilinçli olmak ilişkiyi korur."
            }
        ]
    },
    {
        id: 2,
        title: "Acil Durum Yönetimi",
        description: "Korunmasız ilişki sonrası endişe",
        icon: "🚨",
        difficulty: "Orta",
        situation: "Can, bir parti sonrası korunmasız cinsel ilişkiye girdiğini fark etti. Sabah uyandığında durumu fark eden Can çok endişeli ve ne yapması gerektiğini bilmiyor. Arkadaşlarına danışmayı düşünüyor ama utanıyor.",
        choices: [
            {
                text: "Hemen bir sağlık kuruluşuna başvurmalı ve durumu açıklamalı",
                outcome: "Doğru karar! Erken müdahale çok önemli. Sağlık profesyonelleri size en iyi şekilde yardımcı olacak ve gerekli önlemleri alacaktır. Utanmaya gerek yok, bu çok yaygın bir durumdur.",
                isCorrect: true,
                explanation: "Korunmasız ilişki sonrası 72 saat içinde (tercihen 24 saat içinde) sağlık kuruluşuna başvurmak önemlidir. PEP (Post-Exposure Prophylaxis) gibi önleyici tedaviler erken başlandığında etkilidir. Sağlık profesyonelleri bu durumlarla sık karşılaşır ve yardımcı olmak için oradadır."
            },
            {
                text: "Birkaç hafta beklemeli ve belirti çıkarsa doktora gitmeli",
                outcome: "Beklemek riskli! Birçok CYBE belirti vermez ve erken müdahale şansını kaçırabilirsiniz. Bazı önleyici tedaviler sadece ilk günlerde etkilidir.",
                isCorrect: false,
                explanation: "Beklemek tehlikelidir çünkü bazı önleyici tedaviler sadece ilk 72 saat içinde etkilidir. Ayrıca birçok CYBE belirti vermez, bu nedenle erken test ve müdahale hayati önem taşır. Zaman kaybetmek sağlığınızı riske atar."
            },
            {
                text: "İnternetten ilaç araştırıp kendi kendine tedavi etmeli",
                outcome: "Tehlikeli! Kendi kendine tedavi ciddi sağlık sorunlarına yol açabilir. Yanlış ilaç kullanımı durumu daha da kötüleştirebilir. Mutlaka uzman desteği alın.",
                isCorrect: false,
                explanation: "Kendi kendine tedavi son derece tehlikelidir. Yanlış ilaç kullanımı durumu daha da kötüleştirebilir, yan etkilere neden olabilir ve doğru tedaviyi geciktirebilir. Mutlaka sağlık profesyoneline danışılmalıdır."
            }
        ]
    },
    {
        id: 3,
        title: "Arkadaş Desteği",
        description: "Arkadaşınız size danışıyor",
        icon: "🤝",
        difficulty: "Kolay",
        situation: "Zeynep, yakın arkadaşı Elif'in CYBE testi yaptırmaktan korktuğunu ve utandığını öğrendi. Elif, yeni bir ilişkisi var ve test yaptırmak istiyor ama cesaretini toplayamıyor. Zeynep'ten tavsiye istiyor ve ne yapması gerektiğini sorguluyor.",
        choices: [
            {
                text: "Elif'e test yaptırmanın normal ve önemli olduğunu, birlikte gidebileceklerini söylemeli",
                outcome: "Harika bir arkadaşsınız! Destek olmak ve bilgilendirmek en doğru yaklaşım. Elif'in yanında olmanız onun cesaretini artıracak ve sağlıklı bir karar almasını sağlayacaktır.",
                isCorrect: true,
                explanation: "CYBE testi yaptırmak utanılacak bir şey değil, aksine sorumlu bir davranıştır. Arkadaşınıza destek olmak ve birlikte gitmek onun cesaretini artırabilir. Sağlık profesyonelleri bu konuda çok anlayışlıdır ve yardımcı olmak için oradadır."
            },
            {
                text: "Elif'e test yaptırmanın gereksiz olduğunu, endişelenmemesini söylemeli",
                outcome: "Yanlış tavsiye! Test yaptırmak önemlidir ve ertelenmemelidir. Bu tavsiye arkadaşınızın sağlığını riske atabilir.",
                isCorrect: false,
                explanation: "Test yaptırmayı ertelemek veya gereksiz göstermek yanlış bir tavsiyeldir. Erken teşhis tedavi şansını artırır ve bulaşı önler. Arkadaşınıza doğru bilgi vermek onun sağlığını korur."
            },
            {
                text: "Bu konuda tavsiye vermemeli, Elif'in kendi kararını vermesini beklemeli",
                outcome: "Destek olmak önemlidir. Sessiz kalmak yerine bilgilendirici ve destekleyici olun. Arkadaşınız size güveniyor ve yardımınıza ihtiyacı var.",
                isCorrect: false,
                explanation: "Arkadaşınız size danıştığında bilgilendirici ve destekleyici olmak önemlidir. Doğru bilgi vermek ve destek olmak arkadaşlığın bir parçasıdır. Sessiz kalmak yardımcı olmaz."
            }
        ]
    },
    {
        id: 4,
        title: "Üniversite Yaşamı",
        description: "Kampüste cinsel sağlık farkındalığı",
        icon: "🎓",
        difficulty: "Orta",
        situation: "Üniversite öğrencisi Deniz, kampüste arkadaşlarının cinsel sağlık konusunda yeterli bilgiye sahip olmadığını fark ediyor. Bazı arkadaşları kondomu gereksiz buluyor, bazıları ise CYBE testlerinin pahalı olduğunu düşünüyor. Deniz ne yapmalı?",
        choices: [
            {
                text: "Üniversite sağlık merkezinden bilgi alıp arkadaşlarıyla paylaşmalı, farkındalık oluşturmalı",
                outcome: "Mükemmel! Bilgi paylaşımı ve farkındalık oluşturmak toplum sağlığı için çok önemli. Üniversite sağlık merkezleri genellikle ücretsiz veya uygun fiyatlı hizmetler sunar.",
                isCorrect: true,
                explanation: "Cinsel sağlık konusunda farkındalık oluşturmak toplum sağlığı için kritik öneme sahiptir. Üniversite sağlık merkezleri genellikle öğrencilere ücretsiz veya çok uygun fiyatlı CYBE testleri ve danışmanlık hizmetleri sunar. Doğru bilgiyi yaymak hayat kurtarabilir."
            },
            {
                text: "Herkes kendi işine bakmalı, bu kişisel bir konu",
                outcome: "Yanlış yaklaşım! Cinsel sağlık toplum sağlığını etkiler. Bilgi paylaşımı ve farkındalık herkesin sorumluluğudur.",
                isCorrect: false,
                explanation: "Cinsel sağlık sadece kişisel değil, toplumsal bir konudur. CYBE'ler bulaşıcıdır ve bilgisizlik yayılmalarına neden olur. Doğru bilgiyi paylaşmak toplum sağlığını korur ve hayat kurtarabilir."
            },
            {
                text: "Arkadaşlarına sadece kondom kullanmalarını söylemeli, test gereksiz",
                outcome: "Eksik bilgi! Kondom önemli ama tek başına yeterli değil. Düzenli test ve bilgilendirme de gereklidir.",
                isCorrect: false,
                explanation: "Kondom kullanımı önemli bir koruma yöntemidir ancak tek başına yeterli değildir. Düzenli testler, doğru bilgilendirme ve farkındalık da cinsel sağlığın önemli parçalarıdır. Kapsamlı bir yaklaşım gereklidir."
            }
        ]
    },
    {
        id: 5,
        title: "Aile Planlaması Danışmanlığı",
        description: "Evlilik öncesi hazırlık",
        icon: "💍",
        difficulty: "Kolay",
        situation: "Selin ve Emre evlenmeye karar verdiler. Düğün hazırlıkları devam ederken, Selin'in annesi onlara evlilik öncesi sağlık kontrolü yaptırmalarını öneriyor. Emre, 'Zaten sağlıklıyız, gerek yok' diyor. Selin ne yapmalı?",
        choices: [
            {
                text: "Annesinin tavsiyesini dinlemeli, ikisi de kapsamlı sağlık kontrolü ve CYBE testi yaptırmalı",
                outcome: "Çok doğru! Evlilik öncesi sağlık kontrolü ve CYBE testleri, sağlıklı bir aile hayatının temelini atar. Bu hem sizin hem de gelecekteki çocuklarınızın sağlığı için önemlidir.",
                isCorrect: true,
                explanation: "Evlilik öncesi sağlık kontrolü ve CYBE testleri yapmak, sağlıklı bir aile hayatının temelini atar. Bazı CYBE'ler belirti vermeden taşınabilir ve gelecekte çocuklara da bulaşabilir. Erken teşhis ve tedavi hem sizin hem de gelecekteki çocuklarınızın sağlığını korur."
            },
            {
                text: "Emre haklı, sağlıklı görünüyorlarsa test gereksiz",
                outcome: "Yanlış! Birçok CYBE belirti vermez. Sağlıklı görünmek, enfeksiyon olmadığı anlamına gelmez. Test yaptırmak önemlidir.",
                isCorrect: false,
                explanation: "Birçok CYBE belirti vermez ve kişi enfekte olduğunu bilmeyebilir. Sağlıklı görünmek, enfeksiyon olmadığı anlamına gelmez. Evlilik öncesi test yaptırmak, gelecekteki sağlık sorunlarını önler ve aile planlaması için önemlidir."
            },
            {
                text: "Sadece kadın test yaptırmalı, erkeklerde CYBE riski düşük",
                outcome: "Tamamen yanlış! CYBE'ler hem erkekleri hem kadınları eşit şekilde etkiler. Her iki partner de test yaptırmalıdır.",
                isCorrect: false,
                explanation: "Bu tamamen yanlış bir düşüncedir. CYBE'ler hem erkekleri hem kadınları eşit şekilde etkiler. Her iki partnerin de test yaptırması gerekir. Cinsiyet ayrımı yapmak sağlık konusunda tehlikelidir."
            }
        ]
    },
    {
        id: 6,
        title: "Sosyal Medya Bilgilendirmesi",
        description: "Yanlış bilgilerle mücadele",
        icon: "📱",
        difficulty: "Orta",
        situation: "Ahmet, sosyal medyada 'CYBE'ler sadece belirli yaşam tarzına sahip insanlarda görülür' diyen bir paylaşım görüyor. Yorumlarda birçok kişi bu bilgiyi doğru sanıyor ve test yaptırmayı gereksiz buluyor. Ahmet ne yapmalı?",
        choices: [
            {
                text: "Güvenilir kaynaklardan doğru bilgiyi paylaşmalı ve yanlış bilgiyi düzeltmeli",
                outcome: "Harika! Sosyal medyada doğru bilgi paylaşmak ve yanlış bilgileri düzeltmek toplum sağlığı için çok önemli. Güvenilir kaynaklara yönlendirme yapmanız değerlidir.",
                isCorrect: true,
                explanation: "Sosyal medyada yanlış sağlık bilgileri hızla yayılabilir ve ciddi sonuçlara yol açabilir. CYBE'ler yaşam tarzından bağımsız olarak herkesi etkileyebilir. Doğru bilgiyi güvenilir kaynaklardan (Sağlık Bakanlığı, DSÖ) paylaşmak ve yanlış bilgileri düzeltmek toplum sağlığı için kritik öneme sahiptir."
            },
            {
                text: "Karışmamalı, herkes kendi bilgisine göre hareket eder",
                outcome: "Yanlış! Yanlış sağlık bilgileri hayati tehlike oluşturabilir. Doğru bilgiyi paylaşmak sosyal sorumluluktur.",
                isCorrect: false,
                explanation: "Yanlış sağlık bilgileri hayati tehlike oluşturabilir ve insanların sağlığını riske atabilir. Doğru bilgiyi paylaşmak ve yanlış bilgileri düzeltmek sosyal sorumluluktur. Sessiz kalmak, yanlış bilginin yayılmasına katkıda bulunur."
            },
            {
                text: "Paylaşımı beğenmeli ve desteklemeli, çoğunluk haklıdır",
                outcome: "Çok yanlış! Çoğunluk her zaman haklı değildir, özellikle sağlık konularında. Bilimsel gerçeklere dayanmak önemlidir.",
                isCorrect: false,
                explanation: "Sağlık konularında çoğunluk görüşü değil, bilimsel gerçekler önemlidir. CYBE'ler herkesi etkileyebilir ve yaşam tarzı ayrımı yapmak tehlikelidir. Yanlış bilgiyi desteklemek toplum sağlığına zarar verir."
            }
        ]
    },
    {
        id: 7,
        title: "İş Yerinde Farkındalık",
        description: "Çalışma ortamında sağlık bilinci",
        icon: "💼",
        difficulty: "Orta",
        situation: "Büyük bir şirkette İK uzmanı olan Aylin, çalışanların cinsel sağlık konusunda bilgilendirilmesi için bir seminer düzenlemeyi düşünüyor. Ancak bazı yöneticiler 'Bu konu çok özel, iş yerine uygun değil' diyor. Şirket sahibi Aylin'den görüş istiyor.",
        choices: [
            {
                text: "Semineri düzenlemeli, çalışan sağlığı her konuyu kapsar ve CYBE farkındalığı önemlidir",
                outcome: "Mükemmel karar! İş yerinde sağlık eğitimleri çalışan refahını artırır. CYBE farkındalığı toplum sağlığının bir parçasıdır ve profesyonel ortamlarda da ele alınmalıdır.",
                isCorrect: true,
                explanation: "İş yerleri çalışan sağlığını desteklemekle yükümlüdür. CYBE farkındalığı, genel sağlık eğitiminin önemli bir parçasıdır. Profesyonel ve bilimsel bir yaklaşımla sunulan bu tür seminerler, çalışanların sağlık bilincini artırır ve toplum sağlığına katkıda bulunur."
            },
            {
                text: "Semineri iptal etmeli, bu konu iş yerine uygun değil",
                outcome: "Yanlış! Çalışan sağlığı her konuyu kapsar. CYBE farkındalığı önemli bir halk sağlığı konusudur.",
                isCorrect: false,
                explanation: "Cinsel sağlık, genel sağlığın ayrılmaz bir parçasıdır. İş yerleri çalışanlarının fiziksel ve mental sağlığını desteklemekle sorumludur. CYBE farkındalığı tabu değil, bilimsel bir konudur ve profesyonel ortamlarda ele alınmalıdır."
            },
            {
                text: "Sadece gönüllü çalışanlara özel, gizli bir toplantı düzenlemeli",
                outcome: "Kısmen doğru ama yeterli değil. Gizlilik yerine açık ve profesyonel bir yaklaşım daha etkilidir.",
                isCorrect: false,
                explanation: "Gönüllülük önemli olsa da, konuyu 'gizli' tutmak stigmayı artırır. Açık, profesyonel ve bilimsel bir yaklaşımla sunulan eğitimler daha etkilidir ve konunun normalleşmesine yardımcı olur."
            }
        ]
    },
    {
        id: 8,
        title: "Sağlık Turizmi Riski",
        description: "Yurt dışı seyahat ve sağlık",
        icon: "✈️",
        difficulty: "Zor",
        situation: "Murat, arkadaşlarıyla yurt dışına tatile gidiyor. Tatil sırasında yeni tanıştığı biriyle yakınlaşıyor. Arkadaşları 'Tatilde herkes özgürdür, eğlen' diyor. Murat ne yapmalı?",
        choices: [
            {
                text: "Korunma yöntemlerini mutlaka kullanmalı, yurt dışında da riskler aynı",
                outcome: "Çok doğru! Coğrafi konum CYBE riskini değiştirmez. Tatilde de korunma önlemleri aynı derecede önemlidir.",
                isCorrect: true,
                explanation: "CYBE'ler coğrafi sınır tanımaz. Yurt dışında, tatilde veya farklı ortamlarda da korunma önlemleri aynı derecede önemlidir. 'Tatil özgürlüğü' sağlık risklerini ortadan kaldırmaz. Kondom kullanımı ve bilinçli davranmak her zaman gereklidir."
            },
            {
                text: "Tatilde kurallar farklıdır, endişelenmesine gerek yok",
                outcome: "Çok tehlikeli! CYBE'ler tatil yapmaz. Yurt dışında risk daha da yüksek olabilir.",
                isCorrect: false,
                explanation: "Bu son derece tehlikeli bir düşüncedir. Tatil ortamları ve yeni tanışılan kişilerle olan ilişkiler daha yüksek risk taşıyabilir. Bazı ülkelerde CYBE oranları daha yüksektir. Tatilde de korunma önlemleri mutlaka alınmalıdır."
            },
            {
                text: "Arkadaşlarının tavsiyesini dinlemeli, herkes böyle yapıyor",
                outcome: "Yanlış! Akran baskısı sağlık kararlarınızı etkilememeli. Kendi sağlığınız önceliklidir.",
                isCorrect: false,
                explanation: "Akran baskısı ve 'herkes yapıyor' mantığı sağlık konularında tehlikelidir. Kendi sağlığınız ve geleceğiniz söz konusudur. Arkadaşlarınızın tavsiyeleri yerine bilimsel gerçeklere ve kendi sağlığınıza öncelik vermelisiniz."
            }
        ]
    },
    {
        id: 9,
        title: "Genç Ebeveyn Sorumluluğu",
        description: "Çocuğa cinsel sağlık eğitimi",
        icon: "👨‍👩‍👧",
        difficulty: "Orta",
        situation: "18 yaşındaki kızı Zehra'nın üniversiteye başlayacağını öğrenen anne Fatma, kızıyla cinsel sağlık konusunda konuşmak istiyor. Ancak eşi 'Bu konuları konuşmak ayıp, kızımız zaten iyi bir çocuk' diyor. Fatma ne yapmalı?",
        choices: [
            {
                text: "Eşini ikna etmeli ve kızıyla açık, bilimsel bir şekilde konuşmalı",
                outcome: "Mükemmel! Ebeveyn-çocuk iletişimi çok önemli. Bilimsel ve açık iletişim gençleri korur.",
                isCorrect: true,
                explanation: "Ebeveynlerin çocuklarıyla cinsel sağlık konusunda açık ve bilimsel konuşması son derece önemlidir. Bu 'ayıp' değil, sorumluluktur. Doğru bilgiyle donanmış gençler daha bilinçli kararlar alır ve kendilerini koruyabilir. Sessiz kalmak gençleri yanlış bilgilere ve risklere açık bırakır."
            },
            {
                text: "Eşinin dediğini yapmalı, bu konular konuşulmaz",
                outcome: "Çok yanlış! Sessiz kalmak gençleri korumaz, aksine riske atar. Bilgi en iyi korumadır.",
                isCorrect: false,
                explanation: "Bu yaklaşım gençleri korumaz, aksine bilgisiz ve savunmasız bırakır. Cinsel sağlık eğitimi almayan gençler yanlış kaynaklardan bilgi edinir ve riskli davranışlarda bulunabilir. Ebeveyn sorumluluğu çocuğu doğru bilgiyle donatmaktır."
            },
            {
                text: "Kızına sadece 'dikkatli ol' demeli, detaya girmemeli",
                outcome: "Yetersiz! Genel uyarılar yeterli değil. Spesifik, bilimsel bilgi gereklidir.",
                isCorrect: false,
                explanation: "Genel ve belirsiz uyarılar gençlere yeterli koruma sağlamaz. Spesifik bilgiler (CYBE türleri, korunma yöntemleri, test yaptırma, acil durumlar) verilmelidir. 'Dikkatli ol' demek yeterli değildir, nasıl dikkatli olacağını öğretmek gerekir."
            }
        ]
    },
    {
        id: 10,
        title: "Sağlık Çalışanı Etiği",
        description: "Hasta mahremiyeti ve bilgilendirme",
        icon: "⚕️",
        difficulty: "Zor",
        situation: "Hemşire Elif, acil serviste 17 yaşında bir hastanın CYBE testi pozitif çıktığını öğreniyor. Hastanın ailesi test sonuçlarını öğrenmek istiyor. Hasta ailesine söylenmemesini rica ediyor. Elif ne yapmalı?",
        choices: [
            {
                text: "Hasta mahremiyetini korumalı, 17 yaş üzeri bireyin kendi kararı önemlidir",
                outcome: "Doğru! Hasta mahremiyeti ve özerkliği temel tıbbi etik ilkesidir. 17 yaş üzeri birey kendi sağlık bilgilerini kontrol edebilir.",
                isCorrect: true,
                explanation: "Hasta mahremiyeti temel bir haktır. 17 yaş üzeri bireyler kendi sağlık bilgileri konusunda karar verebilir. Sağlık çalışanları hasta mahremiyetini korumakla yükümlüdür. Hastayı ailesine danışmanlık almaya teşvik edebilir ama zorla bilgi veremez."
            },
            {
                text: "Aileye hemen bilgi vermeli, hasta reşit değil",
                outcome: "Yanlış! 17 yaş üzeri bireyin sağlık mahremiyeti vardır. Zorla bilgi vermek etik ihlaldir.",
                isCorrect: false,
                explanation: "Bu etik ve yasal bir ihlaldir. 17 yaş üzeri bireyler sağlık konularında karar verebilir. Hasta mahremiyetini ihlal etmek güven kaybına ve gençlerin sağlık hizmetlerinden kaçınmasına neden olur. Hasta rızası olmadan bilgi verilemez."
            },
            {
                text: "Hastayı ailesine söylemesi için zorlamalı, yoksa tedavi etmemeli",
                outcome: "Etik ihlal! Tedaviyi şarta bağlamak ve hasta zorlamak kabul edilemez.",
                isCorrect: false,
                explanation: "Tedaviyi şarta bağlamak ve hastayı zorlamak ciddi etik ihlaldir. Sağlık çalışanları hastayı desteklemeli, danışmanlık sunmalı ama asla zorlamamalıdır. Her hastanın kendi kararını verme hakkı vardır."
            }
        ]
    }
];

// ==========================================
// CYBE Bilgi İçeriği
// ==========================================

const cybeInfo = [
    {
        name: "HIV/AIDS",
        icon: "🔴",
        symptoms: [
            "Grip benzeri belirtiler (erken dönem)",
            "Uzun süreli yorgunluk",
            "Tekrarlayan enfeksiyonlar",
            "Hızlı kilo kaybı"
        ],
        transmission: [
            "Korunmasız cinsel ilişki",
            "Enfekte kan transfüzyonu",
            "Anneden bebeğe geçiş",
            "Enfekte iğne paylaşımı"
        ],
        prevention: [
            "Kondom kullanımı",
            "Tek eşlilik",
            "Düzenli test",
            "PrEP (Profilaksi) kullanımı"
        ]
    },
    {
        name: "HPV (İnsan Papilloma Virüsü)",
        icon: "🟡",
        symptoms: [
            "Genital siğiller",
            "Çoğu zaman belirti vermez",
            "Rahim ağzı hücrelerinde değişiklikler"
        ],
        transmission: [
            "Cilt teması",
            "Cinsel temas",
            "Doğum sırasında anneden bebeğe"
        ],
        prevention: [
            "HPV aşısı (9-26 yaş)",
            "Kondom kullanımı",
            "Düzenli smear testi",
            "Tek eşlilik"
        ]
    },
    {
        name: "Hepatit B",
        icon: "🟠",
        symptoms: [
            "Sarılık",
            "Yorgunluk",
            "Karın ağrısı",
            "Koyu renkli idrar"
        ],
        transmission: [
            "Cinsel temas",
            "Kan yoluyla",
            "Anneden bebeğe",
            "Enfekte iğne paylaşımı"
        ],
        prevention: [
            "Hepatit B aşısı",
            "Kondom kullanımı",
            "Kişisel eşyaları paylaşmama",
            "Güvenli kan transfüzyonu"
        ]
    },
    {
        name: "Klamidya",
        icon: "🔵",
        symptoms: [
            "Çoğu zaman belirti vermez",
            "Ağrılı idrar yapma",
            "Anormal akıntı",
            "Alt karın ağrısı"
        ],
        transmission: [
            "Korunmasız cinsel ilişki",
            "Vajinal, anal veya oral seks"
        ],
        prevention: [
            "Kondom kullanımı",
            "Düzenli tarama",
            "Tek eşlilik",
            "Partner tedavisi"
        ]
    },
    {
        name: "Gonore (Bel Soğukluğu)",
        icon: "🟢",
        symptoms: [
            "Ağrılı idrar yapma",
            "Sarı-yeşil akıntı",
            "Testis ağrısı (erkeklerde)",
            "Pelvik ağrı (kadınlarda)"
        ],
        transmission: [
            "Korunmasız cinsel ilişki",
            "Vajinal, anal veya oral seks"
        ],
        prevention: [
            "Kondom kullanımı",
            "Düzenli test",
            "Tek eşlilik",
            "Erken tedavi"
        ]
    },
    {
        name: "Sifiliz (Frengi)",
        icon: "🟣",
        symptoms: [
            "Ağrısız yara (birincil dönem)",
            "Deri döküntüleri (ikincil dönem)",
            "Organ hasarı (üçüncül dönem)",
            "Lenf bezi şişmesi"
        ],
        transmission: [
            "Cinsel temas",
            "Yara teması",
            "Anneden bebeğe"
        ],
        prevention: [
            "Kondom kullanımı",
            "Düzenli tarama",
            "Tek eşlilik",
            "Erken tedavi"
        ]
    },
    {
        name: "Trikomonas (Trikomoniazis)",
        icon: "🔵",
        symptoms: [
            "Köpüklü, sarı-yeşil akıntı",
            "Genital bölgede kaşıntı ve yanma",
            "Ağrılı idrar yapma",
            "Erkeklerde genellikle belirti vermez"
        ],
        transmission: [
            "Korunmasız cinsel ilişki",
            "Vajinal seks",
            "Enfekte kişiyle cinsel temas"
        ],
        prevention: [
            "Kondom kullanımı",
            "Tek eşlilik",
            "Düzenli tarama",
            "Partner tedavisi",
            "Kişisel hijyen"
        ]
    },
    {
        name: "Genital Herpes (HSV-2)",
        icon: "🔴",
        symptoms: [
            "Genital bölgede ağrılı su toplaması",
            "Kaşıntı ve yanma hissi",
            "Grip benzeri belirtiler",
            "Tekrarlayan alevlenmeler"
        ],
        transmission: [
            "Cilt teması",
            "Cinsel temas",
            "Aktif yara döneminde daha bulaşıcı",
            "Belirti olmadan da bulaşabilir"
        ],
        prevention: [
            "Kondom kullanımı (kısmi koruma)",
            "Aktif yara döneminde cinsel ilişkiden kaçınma",
            "Antiviral ilaç kullanımı",
            "Partner bilgilendirmesi",
            "Düzenli kontrol"
        ]
    },
    {
        name: "Hepatit C",
        icon: "🟠",
        symptoms: [
            "Yorgunluk ve halsizlik",
            "Sarılık (geç dönem)",
            "Karın ağrısı",
            "Çoğu zaman belirti vermez"
        ],
        transmission: [
            "Kan yoluyla (en yaygın)",
            "Enfekte iğne paylaşımı",
            "Korunmasız cinsel ilişki (düşük risk)",
            "Anneden bebeğe (nadir)"
        ],
        prevention: [
            "İğne paylaşımından kaçınma",
            "Güvenli kan transfüzyonu",
            "Kondom kullanımı",
            "Kişisel eşyaları paylaşmama",
            "Düzenli tarama"
        ]
    },
    {
        name: "Mikoplazma ve Ureaplazma",
        icon: "🟣",
        symptoms: [
            "Hafif akıntı",
            "İdrar yaparken yanma",
            "Genellikle belirti vermez",
            "Pelvik ağrı (kadınlarda)"
        ],
        transmission: [
            "Korunmasız cinsel ilişki",
            "Vajinal, anal veya oral seks",
            "Anneden bebeğe (doğum sırasında)"
        ],
        prevention: [
            "Kondom kullanımı",
            "Tek eşlilik",
            "Düzenli tarama",
            "Partner tedavisi",
            "Hamilelik öncesi kontrol"
        ]
    }
];

// ==========================================
// Asepsi ve Mikrobiyoloji Bilgileri
// ==========================================

const asepsisInfo = {
    principles: [
        {
            title: "Asepsi Nedir?",
            content: "Asepsi, mikroorganizmaların bulunmaması veya bulaşmasının önlenmesi için alınan tüm önlemlerdir. Tıbbi asepsi ve cerrahi asepsi olmak üzere iki türü vardır."
        },
        {
            title: "Tıbbi Asepsi",
            content: "Mikroorganizmaların sayısını azaltmayı ve yayılmasını önlemeyi amaçlar. El yıkama, temizlik ve dezenfeksiyon bu kapsamdadır."
        },
        {
            title: "Cerrahi Asepsi",
            content: "Tüm mikroorganizmaların tamamen yok edilmesini amaçlar. Ameliyathanelerde ve invaziv işlemlerde uygulanır."
        }
    ],
    handHygiene: [
        {
            step: 1,
            title: "Elleri Islatın",
            description: "Ellerinizi temiz, akan suyla ıslatın"
        },
        {
            step: 2,
            title: "Sabun Uygulayın",
            description: "Yeterli miktarda sabun alın"
        },
        {
            step: 3,
            title: "Ovun",
            description: "Avuç içi, avuç dışı, parmak araları ve tırnakları en az 20 saniye ovun"
        },
        {
            step: 4,
            title: "Durulayın",
            description: "Elleri akan suyla iyice durulayın"
        },
        {
            step: 5,
            title: "Kurulayın",
            description: "Temiz bir havlu veya kağıt havluyla kurulayın"
        }
    ],
    microbiology: [
        {
            title: "Bakteriler",
            content: "Tek hücreli mikroorganizmalardır. Bazıları yararlı, bazıları zararlıdır. Antibiyotiklerle tedavi edilebilir."
        },
        {
            title: "Virüsler",
            content: "Canlı hücre içinde çoğalan mikroorganizmalardır. Antibiyotiklerle tedavi edilemez, antiviral ilaçlar kullanılır."
        },
        {
            title: "Mantarlar",
            content: "Nem ve sıcak ortamları seven mikroorganizmalardır. Antifungal ilaçlarla tedavi edilir."
        },
        {
            title: "Bulaşma Yolları",
            content: "Direkt temas, damlacık, hava yolu, kan yolu ve cinsel temas yoluyla bulaşabilir."
        }
    ]
};
