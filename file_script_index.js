(function () {
    var menu = document.getElementById('navbar'); // colocar em cache
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) menu.classList.add('b'); // > 0 ou outro valor desejado
        else menu.classList.remove('b');
    });
})();