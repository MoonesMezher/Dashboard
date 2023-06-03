$(function() {
    $(".check").on("click", function() {
        $(this).children("span").toggleClass("right");
        $(this).children("span").toggleClass("left");
        $(this).toggleClass("left");
        $(this).toggleClass("right");
    });
});