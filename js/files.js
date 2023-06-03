$(function() {
    $.ajax({
        type: "GET",
        url :"../json/files.json",
        data: {
            format: "json"
        }, 
        error: function() {
            console.log("error");
        },
        success: function(data) {
            for(obj in data) {
                let file = `<div class="file bg-white overflow-h br-10 p-20 relative">
                    <i class="fas fa-upload grey pointer absolute" title="download"></i>
                    <div class="img">
                        <img src=${data[obj]["img"]} alt="file">
                    </div>
                    <p class="mt-10 txt-c fs-14">${data[obj]["title"]}</p>
                    <p class="name mt-15 grey fs-14">${data[obj]["name"]}</p>
                    <div class="info space-between grey fs-14 mt-10">
                        <span>${data[obj]["date"]}</span>
                        <span>${data[obj]["size"]}</span>
                    </div>
                </div>`;

                $(".files-page .files").append(file);
            }
        }
    });
});