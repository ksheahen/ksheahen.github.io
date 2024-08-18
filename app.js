// Scroll to top function

const scrollUp = document.querySelector('#scroll-up');

scrollUp.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
});

//Mobile & Smaller Devices

//Hamburger Menu (Nav Section)
const burger = document.querySelector('#burger-menu');
const ul = document.querySelector('nav ul');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
    ul.classList.toggle('show');
})

//Closes the hamburger menu when a link is clicked
const navLink = document.querySelectorAll('.nav-link');

navLink.forEach((link) => link.addEventListener('click', () => {
    ul.classList.remove('show');
}))