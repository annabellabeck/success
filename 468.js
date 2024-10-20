// Konfigurasi iklan
var atOptions = {
		'key' : '01ba7007dc7492889adb28d4fa3ef801',
		'format' : 'iframe',
		'height' : 60,
		'width' : 468,
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
