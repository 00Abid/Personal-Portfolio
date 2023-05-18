
// for hamburger menu
document.addEventListener('DOMContentLoaded', function () {
    var menu = document.getElementById('menu');
    var header = document.querySelector('header');

    menu.addEventListener('click', function () {
        this.classList.toggle('fa-times');
        header.classList.toggle('toggle');
    });

    window.addEventListener('scroll', removeClasses);
    window.addEventListener('load', removeClasses);

    function removeClasses() {
        menu.classList.remove('fa-times');
        header.classList.remove('toggle');
    }
});


// for smooth scrooling
var links = document.querySelectorAll('a[href*="#"]');

links.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        var target = document.querySelector(this.getAttribute('href'));
        var offsetTop = target.offsetTop;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});




