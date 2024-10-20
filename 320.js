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
    script.src = '//servicefigured.com/' + atOptions.key + '/invoke.js';
    document.body.appendChild(script);
}

// Panggil fungsi loadAd setelah halaman selesai dimuat
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    loadAd();
} else {
    document.addEventListener('DOMContentLoaded', loadAd);
}
