$(function() {
    $.ajax({
        type: "GET",
        url: "../json/notification.json",
        data: {
            format: "json"
        },
        error: function() {
            console.log("error");
        }, 
        success: function(data) {
            for(let obj in data) {
                let notification = `<div class="notification bg-white br-6 overflow-h p-20 d-f center column g-20 pointer">
                        <div class="img relative">
                            <img class="circle overflow-h" src="${data[obj]["img"]}" alt="Notification">
                            <div class="icon absolute circle p-5 d-f center" style="background-color:${data[obj]["bg-icon"]}">
                                <i class="fas ${data[obj]["icon"]} white"></i>
                            </div>
                        </div>
                        <div class="discription d-f g-10 column w-full center">
                            <div class="d-f g-5 column txt-c center">
                                <h4 class="fs-14">${data[obj]["name"]}</h4>
                                <span class="fs-14">${data[obj]["discription"]}</span>
                            </div>
                            <span class="date grey fs-12">
                                ${data[obj]["date"]} at <span class="time">${data[obj]["time"]}</span>
                            </span>
                        </div>
                    </div>`;

                $(".notifications-page").append(notification);
            }
        }
    });
});