const mainImg = document.querySelectorAll("#main_secImg");
const mainImg1 = document.querySelectorAll("#main_secImg1");
const mainImg2 = document.querySelectorAll("#main_secImg2");
const mainImg3 = document.querySelectorAll("#main_secImg3");
const mainImg4 = document.querySelectorAll("#main_secImg4");

Array.from(mainImg).forEach(image => {
    function changeWindow(event) {
        if (event.matches) {
            image.setAttribute("src", "./assets//images/landscape markGroup.png");
        } else {
            image.setAttribute("src", "./assets//images/Mask group.png");
        }
    }
    var windowWidth = window.matchMedia("(max-width: 768px)");
    changeWindow(windowWidth);
    windowWidth.addListener(changeWindow);
})

Array.from(mainImg1).forEach(image => {
    function changeWindow(event) {
        if (event.matches) {
            image.setAttribute("src", "./assets//images/mark1 landscape.png");
        } else {
            image.setAttribute("src", "./assets//images/mark1.png");
        }
    }
    var windowWidth = window.matchMedia("(max-width: 768px)");
    changeWindow(windowWidth);
    windowWidth.addListener(changeWindow);
})


Array.from(mainImg2).forEach(image => {
    function changeWindow(event) {
        if (event.matches) {
            image.setAttribute("src", "./assets//images/mask2Landscape.png");
        } else {
            image.setAttribute("src", "./assets//images/mask2.png");
        }
    }
    var windowWidth = window.matchMedia("(max-width: 768px)");
    changeWindow(windowWidth);
    windowWidth.addListener(changeWindow);
})


Array.from(mainImg3).forEach(image => {
    function changeWindow(event) {
        if (event.matches) {
            image.setAttribute("src", "./assets//images/mask3Landscape.png");
        } else {
            image.setAttribute("src", "./assets//images/mask3.png");
        }
    }
    var windowWidth = window.matchMedia("(max-width: 768px)");
    changeWindow(windowWidth);
    windowWidth.addListener(changeWindow);
})

Array.from(mainImg4).forEach(image => {
    function changeWindow(event) {
        if (event.matches) {
            image.setAttribute("src", "./assets//images/mask4Landscape.png");
        } else {
            image.setAttribute("src", "./assets//images/mask4.png");
        }
    }
    var windowWidth = window.matchMedia("(max-width: 768px)");
    changeWindow(windowWidth);
    windowWidth.addListener(changeWindow);
})