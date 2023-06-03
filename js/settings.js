$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() >= $(".security").offset().top) {
            $(".toUp").removeClass("none");
        } else {
            $(".toUp").addClass("none");
        }
    });

    $(".content").on("click", function(e) {
        if(e.target.classList.contains("toUp") || e.target.classList.contains("fa-long-arrow-alt-up")) {
            $(window).scrollTop(0);
        }
    });
    
    $(".check").on("click", function() {
        $(this).children("span").toggleClass("right");
        $(this).children("span").toggleClass("left");
        $(this).toggleClass("left");
        $(this).toggleClass("right");
    });

    $(".servers .box").on("click", function() {
        $(".servers .box").removeClass("checked");
        $(this).addClass("checked");
    });
});