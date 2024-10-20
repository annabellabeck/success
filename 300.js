// Konfigurasi iklan
var atOptions = {
		'key' : '0588635e143b313b5e3e078a470bf3ce',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
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
