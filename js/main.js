$(document).ready(function () {
    $(".navbar-toggler>i").click(function (e) {
        e.preventDefault();
        $(".header__menu").toggleClass("d-flex");
    })
})