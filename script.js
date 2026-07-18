// ======================================
// Developed by Funanani Netshifhefhe
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    // ==============================
    // Sidebar Menu Controls
    // ==============================
    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("sidebar");
    const closeMenu = document.getElementById("closeMenu");
    const overlay = document.getElementById("overlay");

    function openMenu() {
        if (sidebar && overlay) {
            sidebar.classList.add("active");
            overlay.classList.add("active");
        }
    }

    function closeSidebar() {
        if (sidebar && overlay) {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
        }
    }

    if (menuBtn) menuBtn.addEventListener("click", openMenu);
    if (closeMenu) closeMenu.addEventListener("click", closeSidebar);
    if (overlay) overlay.addEventListener("click", closeSidebar);

    // Close menu automatically after selecting a sidebar link
    document.querySelectorAll(".sidebar a").forEach(link => {
        link.addEventListener("click", closeSidebar);
    });

    // ==============================
    // Multi-Compatible FAQ Dropdowns
    // ==============================
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault(); // Stop mobile browsers from jumping around
            
            const item = button.parentElement;
            const answer = button.nextElementSibling;
            const icon = button.querySelector("i");

            // 1. Toggle active classes everywhere to support all CSS setups
            button.classList.toggle("active");
            if (item) item.classList.toggle("active");
            if (answer) answer.classList.toggle("active");

            // 2. Handle smooth max-height animation sliding if supported
            if (answer) {
                if (answer.classList.contains("active")) {
                    // Open smoothly using content height + padding room
                    answer.style.maxHeight = answer.scrollHeight + 40 + "px";
                } else {
                    // Shut tight
                    answer.style.maxHeight = "0px";
                }
            }

            // 3. Fallback FontAwesome icon rotation chevron flipper
            if (icon) {
                if (icon.classList.contains("fa-chevron-down")) {
                    icon.classList.remove("fa-chevron-down");
                    icon.classList.add("fa-chevron-up");
                } else if (icon.classList.contains("fa-chevron-up")) {
                    icon.classList.remove("fa-chevron-up");
                    icon.classList.add("fa-chevron-down");
                }
            }
        });
    });

    // ==============================
    // Floating Scroll Button Logic
    // ==============================
    const scrollBtn = document.querySelector(".scroll-btn");

    if (scrollBtn) {
        function updateScrollButton() {
            if (window.scrollY > 500) {
                scrollBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
            } else {
                scrollBtn.innerHTML = '<i class="fa-solid fa-arrow-down"></i>';
            }
        }

        window.addEventListener("scroll", updateScrollButton);
        updateScrollButton(); // Run immediately on load check

        scrollBtn.addEventListener("click", () => {
            if (window.scrollY > 500) {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            } else {
                window.scrollBy({
                    top: window.innerHeight,
                    behavior: "smooth"
                });
            }
        });
    }

    // ==============================
    // Optional Scroll Reveal Setup
    // ==============================
    const revealElements = document.querySelectorAll('.card, .safety-item, .step');
    
    if ('IntersectionObserver' in window) {
        const revealOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.05 });

        revealElements.forEach(el => revealOnScroll.observe(el));
    }

    // Page Fade In Trigger
    document.body.style.opacity = "1";
});

// ========================================================
// Global Quick Exit Handler (Kept outside DOM scope)
// ========================================================
function quickExit() {
    window.location.replace("https://www.google.com");
}
