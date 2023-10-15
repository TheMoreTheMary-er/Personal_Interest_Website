// Smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust the offset as needed
                behavior: 'smooth'
            });
        }
    });
});

//Buttons, Animation/Movement of the Responsive Navigation Menu
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");


const Yokaiinavbar = document.querySelector(".Yokaiinavbar");
const Yokaiimenu = document.querySelector(".Yokaiimenu-list");
const YokaiimenuBtn = document.querySelector(".Yokaiimenu-btn");
const YokaiicancelBtn = document.querySelector(".Yokaiicancel-btn");
menuBtn.onclick= ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    body.classList.add("disabledScroll");

    Yokaiimenu.classList.add("active");
    YokaiimenuBtn.classList.add("hide");
    }
cancelBtn.onclick= ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    body.classList.remove("disabledScroll");

    Yokaiimenu.classList.remove("active");
    YokaiimenuBtn.classList.remove("hide");
    }
window.onscroll= ()=>{
    this.scrollY > 20 ? navbar.classList.add("sticky"): navbar.classList.remove("sticky");
    this.scrollY > 20 ? Yokaiinavbar.classList.add("sticky"): Yokaiinavbar.classList.remove("sticky");
    }

   