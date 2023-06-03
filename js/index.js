$(function() {
    $(".task i").on("click", function() {
        $(this).toggleClass("color").parent().toggleClass("opacity");    
    });

    $(window).on("scroll", function() {
        if($(window).scrollTop() >= $(".tickets").offset().top) {
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

    $(".like").on("click", function() {
        $(".like i").toggleClass("love");
        if($(".like .count").hasClass("nolike")) {
            $(".like .count").text(+$(".like .count").text()+1);
            $(".like .count").removeClass("nolike");
        } else {
            $(".like .count").text(+$(".like .count").text()-1);
            $(".like .count").addClass("nolike");
        }
    });

    $(".comment").on("click", function() {
        $(".comments-list").removeClass("hide");
        $(".content .wrraper, .sidebar").children().css("opacity","50%");
    });

    $(".close-comment").on("click", function() {
        $(".comments-list").addClass("hide");
        $(".content .wrraper, .sidebar").children().css("opacity","100%");
    });

    $(".send").on("click", function() {
        const comment = $(".write-comment").val(); 
        if(comment == "") {
            return;
        }
        $(".comments").append(`<div class="comment d-f overflow-h g-10 align-c w-full p-10 bg-blue br-10 mt-5 white relative">
                    <img class="circle overflow-h pointer" src="../images/avatar.png" alt"profile">
                    <p class="space-between w-full relative">
                        <span class="name">moones mezher</span>
                        ${comment}<span class="remove-comment fas fa-trash pointer red"><i>
                    </p>
                    <div class="control fs-12 grey absolute d-f g-5">
                        <span>replay</span>
                        <span>like</span>
                    </div>
        </div>`);
        $(".comment .count").text(+$(".comment .count").text()+1);

    });
    
    $(".comments").on("click", function(e) {
        if(e.target.classList.contains("remove-comment")) {
            e.target.parentNode.parentNode.remove();
            $(".comment .count").text(+$(".comment .count").text()-1);
        }
    });

});
