// Sayfa yüklendiğinde çalışacak ana fonksiyon
document.addEventListener("DOMContentLoaded", function () {
    
    // Animasyon uygulanacak tüm 'gizli' sınıfa sahip ögeleri seçiyoruz
    const animasyonluOgeler = document.querySelectorAll('.gizli');

    // Intersection Observer ayarları
    const observerAyarlari = {
        root: null, // Görüş alanını tarayıcı penceresi olarak ayarlar
        threshold: 0.15 // Ögenin %15'i ekrana girdiğinde animasyon tetiklenir
    };

    // Observer (Gözlemci) oluşturuluyor
    const gözlemci = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            // Eğer öge ekrana girdiyse
            if (entry.isIntersecting) {
                entry.target.classList.add('gorunur');
                // Bir kez göründükten sonra tekrar izlemeyi bırak (performans için)
                observer.unobserve(entry.target);
            }
        });
    }, observerAyarlari);

    // Seçtiğimiz tüm ögeleri gözlemciye ekliyoruz
    animasyonluOgeler.forEach(oge => {
        gözlemci.observe(oge);
    });

});

