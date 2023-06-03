$(function() {
    $.ajax({
        type: "GET",
        url: "../json/friends.json",
        data: {
            format: "json"
        }, 
        error: function() {
            console.log("error");
        },
        success: function(data) {
            for(obj in data) {
                let freind = `<div class="friend bg-white br-6 overflow-h">
                <div class="profile relative p-20">
                    <div class="img overflow-h circle pointer">
                        <img src="${data[obj]["img"]}" alt="freind">
                    </div>
                    <h4 class="txt-c">${data[obj]["name"]}</h4>
                    <p class="grey fs-14 txt-c mt-10">${data[obj]["job"]}</p>
                    <div class="icon absolute d-f g-5">
                        <span class="d-f center circle p-10 grey pointer">
                            <i class="fas fa-phone"></i>
                        </span>
                        <span class="d-f center circle p-10 grey pointer">
                            <i class="fas fa-envelope"></i>
                        </span>
                    </div>
                </div>
                <div class="info b p-20 space-between m-15 mt-0">
                    <div class="det d-f column g-10 fs-14">
                        <div class="d-f g-10">
                            <i class="fas fa-smile"></i>
                            <p><span>${data[obj]["count-friends"]}</span> friend</p>
                        </div>
                        <div class="d-f g-10">
                            <i class="fas fa-circle-notch"></i>
                            <p><span>${data[obj]["count-projects"]}</span> projects</p>
                        </div>
                        <div class="d-f g-10">
                            <i class="fas fa-newspaper"></i>
                            <p><span>${data[obj]["count-articels"]}</span> articels</p>
                        </div>
                    </div>
                    ${getVIP(data[obj]["vip"])}
                </div>
                <div class="footer space-between p-15">
                    <div class="joind grey fs-14">
                        joind <span>${data[obj]["joined"]}</span>
                    </div>
                    <div class="controls d-f g-5">
                        <div class="btn-blue p-5 br-6 fs-14 profile">profile</div>
                        <div class="btn-red p-5 br-6 fs-14 remove">remove</div>
                    </div>
                </div>
                </div>`;
                $(".friends-page").append(freind);
            }
        }
    });

    function getVIP(value) {
        if(value == "true") {
            return `<span class="vip">VIP</span>`;
        }
        return ``;
    }

    $(".friends-page").on("click", function(e) {
        if(e.target.classList.contains("remove")) {
            e.target.parentNode.parentNode.parentNode.remove();
        }
    });
});