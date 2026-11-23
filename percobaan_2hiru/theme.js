// Mode terang/gelap dinonaktifkan. Situs selalu memakai tema merah-putih.
(function () {
    try { localStorage.removeItem('tema'); localStorage.removeItem('theme'); } catch (e) {}
    document.documentElement.removeAttribute('data-tema');
    document.documentElement.removeAttribute('data-theme');
})();
// Fungsi kosong agar tombol lama (jika masih ada di layout.php) tidak menimbulkan error.
function setTema() {}
function toggleTema() {}
function setTheme() {}
function toggleTheme() {}