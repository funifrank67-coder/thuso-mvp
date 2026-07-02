// ======================================
// THUSO MVP JavaScript
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