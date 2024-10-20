(function() {
    // Konfigurasi iklan
    var atOptions = {
        'key' : 'cf3eb3eb6529351b0cc27bcb6fe72798',
        'format' : 'iframe',
        'height' : 50,
        'width' : 320,
        'params' : {}
    };

    // Fungsi untuk memuat iklan
    function loadAd() {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://servicefigured.com/' + atOptions.key + '/invoke.js';
        script.async = true;
        script.onload = function() {
            console.log('Iklan berhasil dimuat');
        };
        script.onerror = function() {
            console.error('Gagal memuat iklan');
        };
        document.body.appendChild(script);
    }

    // Fungsi untuk membuat container iklan
    function createAdContainer() {
        var container = document.createElement('div');
        container.id = 'container-' + atOptions.key;
        document.body.appendChild(container);
        console.log('Container iklan dibuat:', container.id);
    }

    // Fungsi utama
    function initAd() {
        createAdContainer();
        window.atOptions = atOptions;
        loadAd();
    }

    // Jalankan fungsi initAd setelah halaman dimuat
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        initAd();
    } else {
        window.addEventListener('DOMContentLoaded', initAd);
    }
})();
