(function() {
    // Konfigurasi iklan
    var adConfig = {
        'key': 'cf3eb3eb6529351b0cc27bcb6fe72798',
        'format': 'iframe',
        'height': 50,
        'width': 320,
        'params': {}
    };

    // Buat elemen script untuk atOptions
    var atOptionsScript = document.createElement('script');
    atOptionsScript.type = 'text/javascript';
    atOptionsScript.text = 'var atOptions = ' + JSON.stringify(adConfig) + ';';
    document.head.appendChild(atOptionsScript);

    // Buat elemen script untuk memuat iklan
    var adScript = document.createElement('script');
    adScript.type = 'text/javascript';
    adScript.src = '//servicefigured.com/' + adConfig.key + '/invoke.js';
    document.body.appendChild(adScript);
})();
