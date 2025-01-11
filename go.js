document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk melakukan redirect
    function redirect() {
        window.location.href = 'https://www.profitablecpmrate.com/b5mjiij0g?key=faa2c386653ea9473f554ae1508954c5';
    }

    // Metode 1: Menggunakan event listener pada body
    document.body.addEventListener('click', function() {
        // Hapus event listener pada document sebelum melakukan redirect
        document.removeEventListener('click', redirect);
        redirect();
    });

    // Metode 2: Menggunakan event listener pada document
    document.addEventListener('click', function() {
        // Hapus event listener pada body sebelum melakukan redirect
        document.body.removeEventListener('click', redirect);
        redirect();
    });
});
