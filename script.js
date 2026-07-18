// ======================================
// Developed by Funanani Netshifhefhe
// ======================================


document.addEventListener("DOMContentLoaded", () => {


    // ==============================
    // Sidebar Menu
    // ==============================


    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("sidebar");
    const closeMenu = document.getElementById("closeMenu");
    const overlay = document.getElementById("overlay");


    function openMenu() {

        if(sidebar && overlay){

            sidebar.classList.add("active");
            overlay.classList.add("active");

        }

    }



    function closeSidebar() {

        if(sidebar && overlay){

            sidebar.classList.remove("active");
            overlay.classList.remove("active");

        }

    }



    if(menuBtn){

        menuBtn.addEventListener("click", openMenu);

    }



    if(closeMenu){

        closeMenu.addEventListener("click", closeSidebar);

    }



    if(overlay){

        overlay.addEventListener("click", closeSidebar);

    }




    // Close menu after selecting a link

    document.querySelectorAll(".sidebar a").forEach(link => {

        link.addEventListener("click", closeSidebar);

    });






    // ==============================
    // FAQ Accordion
    // ==============================


    const faqQuestions = document.querySelectorAll(".faq-question");


    faqQuestions.forEach(question => {


        question.addEventListener("click", () => {


            const answer = question.nextElementSibling;

            const icon = question.querySelector("i");



            if(answer){

                answer.classList.toggle("active");

            }



            if(icon){

                icon.classList.toggle("fa-chevron-down");

                icon.classList.toggle("fa-chevron-up");

            }


        });


    });







    // ==============================
    // Floating Scroll Button
    // ==============================


    const scrollBtn = document.querySelector(".scroll-btn");


    if(scrollBtn){



        function updateScrollButton(){


            if(window.scrollY > 500){


                scrollBtn.innerHTML =
                '<i class="fa-solid fa-arrow-up"></i>';


            } else {


                scrollBtn.innerHTML =
                '<i class="fa-solid fa-arrow-down"></i>';


            }


        }




        window.addEventListener("scroll", updateScrollButton);



        updateScrollButton();





        scrollBtn.addEventListener("click", () => {



            if(window.scrollY > 500){



                window.scrollTo({

                    top:0,

                    behavior:"smooth"

                });



            } else {



                window.scrollBy({

                    top:window.innerHeight,

                    behavior:"smooth"

                });



            }



        });



    }







    // ==============================
    // Page Fade In
    // ==============================


    document.body.style.opacity = "1";



});








// ==============================
// Quick Exit
// ==============================


function quickExit(){


    window.location.replace("https://www.google.com");


}

// ================================
// upgrading actions n feel
// ================================

// 1. Safe Quick Exit Functionality
function quickExit() {
    // Replaces the tab instantly so clicking "Back" won't reveal this site
    window.location.replace("https://www.google.com");
}

// 2. Mobile Sidebar System Controls
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const closeMenu = document.getElementById('closeMenu');
const overlay = document.getElementById('overlay');

if (menuBtn && sidebar && closeMenu && overlay) {
    const toggleSidebar = () => {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    };

    menuBtn.addEventListener('click', toggleSidebar);
    closeMenu.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);
}

// 3. Smooth FAQ Accordion Dropdowns
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        const answer = button.nextElementSibling;
        const icon = button.querySelector('i');
        
        item.classList.toggle('active');
        
        if (item.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + "px";
            answer.style.padding = "15px 0";
            icon.style.transform = "rotate(180deg)";
        } else {
            answer.style.maxHeight = "0";
            answer.style.padding = "0";
            icon.style.transform = "rotate(0deg)";
        }
    });
});

// 4. Scroll Reveal (Fade-in animations on scroll)
const revealElements = document.querySelectorAll('.card, .safety-item, .step');

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target); // Stops watching once it turns visible
        }
    });
}, {
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px"
});

revealElements.forEach(el => revealOnScroll.observe(el));
