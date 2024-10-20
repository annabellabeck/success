// Konfigurasi iklan
var atOptions = {
		'key' : '32b9e14e3431ab388585fc9a9c85fea2',
		'format' : 'iframe',
		'height' : 90,
		'width' : 728,
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

