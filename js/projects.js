$(function() {
    $.ajax({
        type: "GET",
        url: "../json/project.json",
        data: {
            format: "json",
        },
        error: function() {
            console.log("error");
        },
        success: function(data) {
            for(obj in data) {
                let project = `<div class="project bg-white p-20 overflow-h br-10 relative">
                <p>${data[obj]["title"]}</p>
                <p class="grey fs-14 mt-15">${data[obj]["discription"]}</p>
                <div class="imgs d-f">${getImages(data[obj])}</div>
                <div class="skills b p-15 d-f g-10 mt-20">${getSkills(data[obj])}</div>
                <div class="price space-between mt-20">
                    <div class="progress relative">
                        <span style="width: ${getProgress(data[obj])}"></span>
                    </div>
                    <span class="grey fs-14">${data[obj]["price"]}</span>
                </div>
                <span class="time grey fs-14 absolute">${data[obj]["time"]}</span>`;
                $(".project-page").append(project);
            }    
        }
    });
    function getImages(array) {
        let imgs = ``;
        for(let img of array["imgs"]) {
            let image = `<div class="img overflow-h circle pointer">
                <img src="${img}" alt="team">
            </div>`;
            imgs+=image;
        }
        return imgs;
    }
    function getSkills(array) {
        let skills = ``;
        for(skill of array["skills"]) {
            let span = `<span class="p-5 br-6 fs-14">${skill}</span>`;
            skills+=span;
        }
        return skills;
    }
    function getProgress(value) {
        let progress = value["progress"];
        if(progress >= "60%" && progress != "100%") {
            progress+="; background-color:#22c55e;";
        } else if(progress == "100%") {
            progress+="; background-color:#0075ff;";
        } else {
            progress+="; background-color:#f44336;";
        }
        return progress;
    }
});