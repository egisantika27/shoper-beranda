// Menunggu hingga seluruh konten halaman dimuat sebelum menjalankan skrip
document.addEventListener('DOMContentLoaded', function() {

    // ====================================================================
    // PUSAT KONTROL: Edit data Anda di sini
    // ====================================================================

    const profileData = {
        name: "SHOPER – Shopee Product Research Tool",
        bio: "Simple | Mudah dipahami | Powerfull",
        picture: "logo-shoper.png"
    };

    const linksData = [
        {
            title: "Cara Penggunaan",
            url: "https://shoper.myscalev.com/shoper-shopee-product-research-tool"
        },
        {
            title: "Beli Licensi (Seumur Hidup)",
            url: "https://egi-santika.myr.id/pl/lisensi-lifetime-shoper-52870"
        },
        {
            title: "Hubungi Developer",
            url: "https://wa.me/628980007065"
        }
    ];

    const socialsData = [
        {
            name: "Instagram",
            url: "https://www.instagram.com/_egisantika?igsh=MWJuZjRodjc4NGRnbg==",
            icon: `<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.687.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"></path></svg>`
        },
        {
            name: "WhatsApp",
            url: "https://wa.me/628980007065",
            icon: `<svg viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.794.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path></svg>`
        },
        {
            name: "YouTube",
            url: "https://www.youtube.com/",
            icon: `<svg viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>`
        }
    ];

    // ====================================================================
    // Logika Aplikasi
    // ====================================================================

    // Fungsi untuk merender data profil
    function renderProfile() {
        document.getElementById('profile-picture').src = profileData.picture;
        document.getElementById('user-name').textContent = profileData.name;
        document.getElementById('user-bio').textContent = profileData.bio;
        document.title = `${profileData.name} | Beranda`;
    }

    // Fungsi untuk merender semua link
    function renderLinks() {
        const linksContainer = document.getElementById('links-container');
        linksData.forEach((link, index) => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.textContent = link.title;
            linkElement.className = 'link-item';
            linkElement.target = '_blank';
            linkElement.style.animationDelay = `${0.5 + index * 0.1}s`;
            linksContainer.appendChild(linkElement);
        });
    }

    // Fungsi untuk merender ikon sosial media
    function renderSocials() {
        const socialsContainer = document.getElementById('socials-container');
        socialsData.forEach(social => {
            const socialElement = document.createElement('a');
            socialElement.href = social.url;
            socialElement.className = 'social-icon';
            socialElement.target = '_blank';
            socialElement.setAttribute('aria-label', social.name);
            socialElement.innerHTML = social.icon;
            socialsContainer.appendChild(socialElement);
        });
    }

    // Panggil semua fungsi render saat halaman siap
    renderProfile();
    renderLinks();
    renderSocials();
    
    // --- [DIPERBAIKI] Logika Popup dipindahkan ke sini ---
    
    // Cek apakah URL mengandung parameter '?ref=install'
    const params = new URLSearchParams(window.location.search);
    if (params.get('ref') === 'install') {
        
        // Dapatkan elemen-elemen modal
        const modal = document.getElementById('welcome-modal');
        const overlay = document.getElementById('welcome-modal-overlay');
        const closeBtn = document.getElementById('modal-close-btn');

        // Fungsi untuk menampilkan modal
        function showModal() {
            modal.classList.remove('hidden');
            overlay.classList.remove('hidden');
        }

        // Fungsi untuk menyembunyikan modal
        function hideModal() {
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        }

        // Tampilkan modal setelah halaman dimuat sebentar
        setTimeout(showModal, 500); // Jeda 0.5 detik untuk efek dramatis

        // Tambahkan event listener untuk menutup modal
        closeBtn.addEventListener('click', hideModal);
        overlay.addEventListener('click', hideModal);
    }
});

