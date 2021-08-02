const imgObj = document.querySelector(".js-img-click");

function popUpImg(event) {
    const targetImg = event.target;
    const urls = targetImg.src;
    const img = new Image();
    img.src = urls;
    const img_width = img.width;
    const win_width = img_width + 25;
    const img_height = img.height;
    const win_height = img_height + 30;

    const openWin = window.open(
        "",
        "_blank",
        "width=" +
            img_width +
            ", height=" +
            img_height +
            ", menubars=no, scrollbars=auto"
    );
    openWin.document.write(
        "<style>body{margin:0px;}</style><img src='" +
            url +
            "' width='" +
            win_width +
            "'>"
    );
}

function init() {
    imgObj.addEventListener("click", popUpImg);
}

init();
