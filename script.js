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

