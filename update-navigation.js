// Script untuk mengupdate navigasi di semua halaman SILOG
// Jalankan dengan Node.js: node update-navigation.js

const fs = require('fs');
const path = require('path');

// Template navigasi yang konsisten
const navigationTemplate = `
    <!-- Navigation -->
    <nav class="navbar" id="navbar" style="position: fixed; top: 0; width: 100%; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(20px); z-index: 1000; padding: 1rem 0; transition: all 0.3s ease; border-bottom: 1px solid rgba(223, 222, 222, 0.3);">
        <div style="max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; padding: 0 2rem;">
            <a href="index.html"><img src="logo.png" alt="SILOG Logo" style="height: 50px; transition: transform 0.3s ease;"></a>
            <ul style="display: flex; list-style: none; gap: 2rem; align-items: center; margin: 0;">
                <li><a href="index.html" style="text-decoration: none; color: #000000; font-weight: 500; font-size: 0.95rem; transition: all 0.3s ease; padding: 0.5rem 0;">Beranda</a></li>
                <li style="position: relative;">
                    <a href="tentang.html" style="text-decoration: none; color: #000000; font-weight: 500; font-size: 0.95rem; transition: all 0.3s ease; padding: 0.5rem 0;">Tentang <i class="fas fa-chevron-down"></i></a>
                    <div style="position: absolute; top: 100%; left: 0; background: #FFFFFF; min-width: 200px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); border-radius: 8px; opacity: 0; visibility: hidden; transform: translateY(-10px); transition: all 0.3s ease; border: 1px solid #DFDEDE;">
                        <a href="sejarah.html" style="display: block; padding: 0.75rem 1rem; color: #000000; text-decoration: none; transition: all 0.3s ease; border-radius: 6px; margin: 0.25rem;">Sejarah</a>
                        <a href="profil.html" style="display: block; padding: 0.75rem 1rem; color: #000000; text-decoration: none; transition: all 0.3s ease; border-radius: 6px; margin: 0.25rem;">Profil</a>
                        <a href="visi-misi.html" style="display: block; padding: 0.75rem 1rem; color: #000000; text-decoration: none; transition: all 0.3s ease; border-radius: 6px; margin: 0.25rem;">Visi & Misi</a>
                        <a href="kebijakan-perusahaan.html" style="display: block; padding: 0.75rem 1rem; color: #000000; text-decoration: none; transition: all 0.3s ease; border-radius: 6px; margin: 0.25rem;">Kebijakan Perusahaan</a>
                        <a href="tata-kelola.html" style="display: block; padding: 0.75rem 1rem; color: #000000; text-decoration: none; transition: all 0.3s ease; border-radius: 6px; margin: 0.25rem;">Tata Kelola Perusahaan</a>
                        <a href="sdm.html" style="display: block; padding: 0.75rem 1rem; color: #000000; text-decoration: none; transition: all 0.3s ease; border-radius: 6px; margin: 0.25rem;">Sumber Daya Manusia</a>
                        <a href="direksi-komisaris.html" style="display: block; padding: 0.75rem 1rem; color: #000000; text-decoration: none; transition: all 0.3s ease; border-radius: 6px; margin: 0.25rem;">Direksi & Komisaris</a>
                    </div>
                </li>
                <li style="position: relative;">
                    <a href="bisnis.html" style="text-decoration: none; color: #000000; font-weight: 500; font-size: 0.95rem; transition: all 0.3s ease; padding: 0.5rem 0;">Bisnis <i class="fas fa-chevron-down"></i></a>
                    <div style="position: absolute; top: 100%; left: 0; background: #FFFFFF; min-width: 200px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); border-radius: 8px; opacity: 0; visibility: hidden; transform: translateY(-10px); transition: all 0.3s ease; border: 1px solid #DFDEDE;">
                        <a href="logistik.html" style="display: block; padding: 0.75rem 1rem; color: #000000; text-decoration: none; transition: all 0.3s ease; border-radius: 6px; margin: 0.25rem;">Logistik</a>
                        <a href="konstruksi.html" style="display: block; padding: 0.75rem 1rem; color: #000000; text-decoration: none; transition: all 0.3s ease; border-radius: 6px; margin: 0.25rem;">Konstruksi</a>
                        <a href="distribusi.html" style="display: block; padding: 0.75rem 1rem; color: #000000; text-decoration: none; transition: all 0.3s ease; border-radius: 6px; margin: 0.25rem;">Distribusi</a>
                    </div>
                </li>
                <li style="position: relative;">
                    <a href="info.html" style="text-decoration: none; color: #000000; font-weight: 500; font-size: 0.95rem; transition: all 0.3s ease; padding: 0.5rem 0;">Info <i class="fas fa-chevron-down"></i></a>
                    <div style="position: absolute; top: 100%; left: 0; background: #FFFFFF; min-width: 200px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); border-radius: 8px; opacity: 0; visibility: hidden; transform: translateY(-10px); transition: all 0.3s ease; border: 1px solid #DFDEDE;">
                        <a href="info.html#berita" style="display: block; padding: 0.75rem 1rem; color: #000000; text-decoration: none; transition: all 0.3s ease; border-radius: 6px; margin: 0.25rem;">Berita</a>
                        <a href="info.html#galeri" style="display: block; padding: 0.75rem 1rem; color: #000000; text-decoration: none; transition: all 0.3s ease; border-radius: 6px; margin: 0.25rem;">Galeri</a>
                    </div>
                </li>
                <li style="position: relative;">
                    <a href="jaringan.html" style="text-decoration: none; color: #000000; font-weight: 500; font-size: 0.95rem; transition: all 0.3s ease; padding: 0.5rem 0;">Jaringan <i class="fas fa-chevron-down"></i></a>
                    <div style="position: absolute; top: 100%; left: 0; background: #FFFFFF; min-width: 200px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); border-radius: 8px; opacity: 0; visibility: hidden; transform: translateY(-10px); transition: all 0.3s ease; border: 1px solid #DFDEDE;">
                        <a href="jaringan.html#portfolio" style="display: block; padding: 0.75rem 1rem; color: #000000; text-decoration: none; transition: all 0.3s ease; border-radius: 6px; margin: 0.25rem;">Portofolio</a>
                        <a href="jaringan.html#warehouse" style="display: block; padding: 0.75rem 1rem; color: #000000; text-decoration: none; transition: all 0.3s ease; border-radius: 6px; margin: 0.25rem;">Gudang</a>
                    </div>
                </li>
                <li><a href="grub.html" style="text-decoration: none; color: #000000; font-weight: 500; font-size: 0.95rem; transition: all 0.3s ease; padding: 0.5rem 0;">Grub</a></li>
                <li><a href="karir.html" style="text-decoration: none; color: #000000; font-weight: 500; font-size: 0.95rem; transition: all 0.3s ease; padding: 0.5rem 0;">Karir</a></li>
                <li><a href="kontak.html" style="text-decoration: none; color: #000000; font-weight: 500; font-size: 0.95rem; transition: all 0.3s ease; padding: 0.5rem 0;">Kontak</a></li>
            </ul>
            <button style="display: none; background: none; border: none; font-size: 1.5rem; color: #000000; cursor: pointer;">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </nav>
`;

// Daftar halaman yang perlu diupdate
const pagesToUpdate = [
    'jaringan.html',
    'grub.html', 
    'karir.html',
    'logistik.html',
    'konstruksi.html',
    'distribusi.html',
    'sejarah.html',
    'profil.html',
    'visi-misi.html',
    'kebijakan-perusahaan.html',
    'tata-kelola.html',
    'sdm.html',
    'direksi-komisaris.html'
];

// Mapping link yang perlu diupdate
const linkMappings = {
    // Footer links
    'href="#"': {
        'Logistik': 'href="logistik.html"',
        'Konstruksi': 'href="konstruksi.html"',
        'Distribusi': 'href="distribusi.html"',
        'Semua Bisnis': 'href="bisnis.html"',
        'Grup': 'href="grub.html"',
        'Berita': 'href="info.html"',
        'Galeri': 'href="info.html#galeri"',
        'Kontak': 'href="kontak.html"',
        'Portofolio': 'href="jaringan.html#portfolio"',
        'Gudang': 'href="jaringan.html#warehouse"',
        'Semua Jaringan': 'href="jaringan.html"'
    },
    // Navigation links
    'history.html': 'sejarah.html',
    'tata-kelola-perusahaan.html': 'tata-kelola.html',
    'sumber-daya-manusia.html': 'sdm.html'
};

console.log('🚀 Memulai update navigasi untuk semua halaman SILOG...\n');

// Update setiap halaman
pagesToUpdate.forEach(filename => {
    const filePath = path.join(__dirname, filename);
    
    if (fs.existsSync(filePath)) {
        console.log(`📝 Mengupdate ${filename}...`);
        
        try {
            let content = fs.readFileSync(filePath, 'utf8');
            
            // Update navigasi jika belum ada atau perlu diupdate
            if (!content.includes('href="tentang.html"') || !content.includes('href="bisnis.html"')) {
                // Cari dan replace navigasi lama
                const navRegex = /<nav[^>]*>[\s\S]*?<\/nav>/i;
                if (navRegex.test(content)) {
                    content = content.replace(navRegex, navigationTemplate);
                } else {
                    // Jika tidak ada nav, tambahkan setelah body tag
                    content = content.replace(/<body[^>]*>/i, '$&' + navigationTemplate);
                }
            }
            
            // Update link-link internal
            Object.entries(linkMappings).forEach(([oldLink, newLink]) => {
                if (typeof newLink === 'string') {
                    content = content.replace(new RegExp(oldLink, 'g'), newLink);
                }
            });
            
            // Update footer links
            content = content.replace(/href="#"[^>]*>Logistik<\/a>/g, 'href="logistik.html">Logistik</a>');
            content = content.replace(/href="#"[^>]*>Konstruksi<\/a>/g, 'href="konstruksi.html">Konstruksi</a>');
            content = content.replace(/href="#"[^>]*>Distribusi<\/a>/g, 'href="distribusi.html">Distribusi</a>');
            content = content.replace(/href="#"[^>]*>Semua Bisnis<\/a>/g, 'href="bisnis.html">Semua Bisnis</a>');
            content = content.replace(/href="#"[^>]*>Grup<\/a>/g, 'href="grub.html">Grup</a>');
            content = content.replace(/href="#"[^>]*>Berita<\/a>/g, 'href="info.html">Berita</a>');
            content = content.replace(/href="#"[^>]*>Galeri<\/a>/g, 'href="info.html#galeri">Galeri</a>');
            content = content.replace(/href="#"[^>]*>Kontak<\/a>/g, 'href="kontak.html">Kontak</a>');
            content = content.replace(/href="#"[^>]*>Portofolio<\/a>/g, 'href="jaringan.html#portfolio">Portofolio</a>');
            content = content.replace(/href="#"[^>]*>Gudang<\/a>/g, 'href="jaringan.html#warehouse">Gudang</a>');
            content = content.replace(/href="#"[^>]*>Semua Jaringan<\/a>/g, 'href="jaringan.html">Semua Jaringan</a>');
            
            // Tulis kembali file
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ ${filename} berhasil diupdate`);
            
        } catch (error) {
            console.log(`❌ Error updating ${filename}:`, error.message);
        }
    } else {
        console.log(`⚠️  ${filename} tidak ditemukan`);
    }
});

console.log('\n🎉 Selesai! Semua halaman telah diupdate dengan navigasi yang konsisten.');
console.log('\n📋 Summary:');
console.log('✅ Navigasi utama telah dihubungkan ke semua halaman');
console.log('✅ Dropdown menu telah dikonfigurasi');
console.log('✅ Footer links telah diperbarui');
console.log('✅ Link internal telah diperbaiki');
console.log('\n🚀 Website SILOG siap digunakan dengan navigasi yang terintegrasi penuh!');