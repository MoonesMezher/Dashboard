$(function() {
    $.ajax({
        type: "GET",
        url: "../json/courses.json",
        data: {
            format: "json"
        },
        error: function() {
            console.log("error")
        },
        success: function(data) {
            for(let obj in data) {
                let course = `<div class="course bg-white br-6 overflow-h">
                <div class="view relative">
                    <div class="img">
                        <img src="${data[obj]["background-img"]}" alt="course">
                    </div>
                    <div class="profile pointer absolute overflow-h circle">
                        <img src="${data[obj]["profile-img"]}" alt="profile">
                    </div>
                </div>
                <div class="info p-20 relative">
                    <h3 class="fs-15">${data[obj]["title"]}</h3>
                    <p class="grey fs-14 mt-20">${data[obj]["discription"]}</p>
                    <spa class="btn-blue mt-20 fs-14 p-5 br-6">course info</spa>
                    <div class="member space-between grey fs-14">
                        <div class="follower">
                            <i class="fas fa-user"></i>
                            <span>${data[obj]["follower"]}</span>
                        </div>
                        <div class="price">${data[obj]["price"]}</div>
                    </div>
                </div>
                </div>`;

                $(".courses-page").append(course);
            }
        },
    });
});