document.addEventListener('DOMContentLoaded', function() {
    
    const toggleButton = document.getElementById('toggle-dark-mode');
    const htmlElement = document.documentElement;
    
    // Fungsi untuk me-reload Disqus saat tema berubah
    function reloadDisqus(newTheme) {
        if (typeof DISQUS !== 'undefined') {
            DISQUS.reset({
                reload: true,
                config: function () {
                    this.page.config = function() {
                        this.set('theme', newTheme);
                    };
                }
            });
        }
    }

    // === LOGIKA DARK MODE ===
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            let nextTheme;
            
            if (htmlElement.classList.contains('dark')) {
                // SWITCHING TO LIGHT MODE
                htmlElement.classList.remove('dark');
                localStorage.theme = 'light';
                nextTheme = 'light';
            } else {
                // SWITCHING TO DARK MODE
                htmlElement.classList.add('dark');
                localStorage.theme = 'dark';
                nextTheme = 'dark';
            }
            
            reloadDisqus(nextTheme);
        });
    }

    // === LOGIKA TUTUP KEBIJAKAN KOMENTAR (FIX) ===
    const closePolicyBtn = document.getElementById('close-policy-btn');
    const policyBox = document.getElementById('policy-box');
    
    if (closePolicyBtn && policyBox) {
        closePolicyBtn.addEventListener('click', function() {
            // Menutup dengan animasi sederhana
            policyBox.style.opacity = '0';
            policyBox.style.transition = 'opacity 0.3s ease-out';
            
            setTimeout(() => {
                policyBox.style.display = 'none';
            }, 300);
        });
    }

    // === LOGIKA SEARCH (REDIRECT KE HALAMAN KHUSUS) ===
    const searchButton = document.getElementById('search-button');
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            // Langsung arahkan ke halaman pencarian
            window.location.href = '/search/'; 
        });
    }

    // === LOGIKA MOBILE MENU ===
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
});