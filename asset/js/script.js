// script.js

// Fungsi untuk smooth scrolling ketika mengklik nav link
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 60, // Sesuaikan dengan tinggi navbar
            behavior: 'smooth'
        });
    });
});

// Fungsi untuk mengubah navbar saat di-scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(8, 1, 47, 0.95)';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        nav.style.backgroundColor = 'rgba(8, 1, 47, 0.75)';
        nav.style.boxShadow = 'none';
    }
});

// Fungsi untuk animasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Animasi fade in untuk konten utama
    const mainContent = document.querySelector('main');
    mainContent.style.opacity = '0';
    mainContent.style.transition = 'opacity 1s ease-in-out';
    
    setTimeout(() => {
        mainContent.style.opacity = '1';
    }, 300);
    
    // Animasi untuk gambar profil
    const profileImg = document.querySelector('#profil img');
    profileImg.style.transform = 'scale(0.9)';
    profileImg.style.transition = 'transform 0.5s ease';
    
    profileImg.addEventListener('mouseover', () => {
        profileImg.style.transform = 'scale(1.05)';
    });
    
    profileImg.addEventListener('mouseout', () => {
        profileImg.style.transform = 'scale(0.9)';
    });
});

// Fungsi untuk galeri karakter
const characterImages = document.querySelectorAll('#content #foto img');
characterImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.style.transition = 'transform 0.3s ease';
    
    img.addEventListener('click', function() {
        // Buat modal untuk menampilkan gambar yang diperbesar
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '1000';
        
        const modalImg = document.createElement('img');
        modalImg.src = this.src;
        modalImg.style.maxHeight = '90%';
        modalImg.style.maxWidth = '90%';
        modalImg.style.borderRadius = '5px';
        
        modal.appendChild(modalImg);
        document.body.appendChild(modal);
        
        // Tutup modal ketika diklik
        modal.addEventListener('click', function() {
            document.body.removeChild(modal);
        });
    });
    
    img.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.02)';
    });
    
    img.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

// Fungsi untuk dark mode toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = '🌙';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.bottom = '20px';
darkModeToggle.style.right = '20px';
darkModeToggle.style.width = '50px';
darkModeToggle.style.height = '50px';
darkModeToggle.style.borderRadius = '50%';
darkModeToggle.style.backgroundColor = 'rgba(8, 1, 47, 0.75)';
darkModeToggle.style.color = 'white';
darkModeToggle.style.border = 'none';
darkModeToggle.style.cursor = 'pointer';
darkModeToggle.style.zIndex = '100';
darkModeToggle.style.fontSize = '20px';

document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️';
        document.body.style.backgroundColor = '#121212';
        document.body.style.color = '#f0f0f0';
    } else {
        darkModeToggle.textContent = '🌙';
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
    }
});

// Fungsi untuk menampilkan waktu saat ini
function updateClock() {
    const now = new Date();
    const clockElement = document.createElement('div');
    clockElement.id = 'clock';
    clockElement.style.position = 'fixed';
    clockElement.style.top = '10px';
    clockElement.style.right = '10px';
    clockElement.style.backgroundColor = 'rgba(8, 1, 47, 0.75)';
    clockElement.style.color = 'white';
    clockElement.style.padding = '5px 10px';
    clockElement.style.borderRadius = '5px';
    clockElement.style.fontSize = '14px';
    
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    
    const existingClock = document.getElementById('clock');
    if (existingClock) {
        existingClock.textContent = clockElement.textContent;
    } else {
        document.body.appendChild(clockElement);
    }
}

setInterval(updateClock, 1000);
updateClock();

// Validasi form kontak (jika ada)
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[name="name"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const message = this.querySelector('textarea[name="message"]').value;
        
        if (!name || !email || !message) {
            alert('Harap isi semua field!');
            return;
        }
        
        if (!email.includes('@')) {
            alert('Email tidak valid!');
            return;
        }
        
        alert('Pesan terkirim! Hokage akan segera membalas.');
        this.reset();
    });
}
