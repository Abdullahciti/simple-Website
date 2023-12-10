// Elements
let list = document.querySelector(".links");
let ul = document.querySelector("ul");
let loader = document.querySelector(".loader");
let btnGoUp = document.querySelector(".go-up");

// Settings
let isOn = false;
let maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
let height = document.documentElement.scrollTop;

// console.log(height, "||", maxHeight, "||", window.innerHeight);

list.onclick = function (event) {
    event.stopPropagation(); // Prevent the click event from propagating to the document
    isOn = !isOn; // Toggle the state

    if (isOn) {
        ul.style.display = "block";
        // console.log("Button is ON");
    } else {
        ul.style.display = "none";
        // console.log("Button is OFF");
    }
};

// Click event listener for the entire document
document.addEventListener("click", function () {
    isOn = false; // Turn off the button
    ul.style.display = "none";
    // console.log("Clicked outside. Button is OFF");
});

window.onscroll = function () {

    if (height > 0) {
        loader.style.width = `${(height / maxHeight) * 100}%`;
    }

    if (height >= 499) {
        btnGoUp.style.display = "block";
    } else {
        btnGoUp.style.display = "none";
    }

    if (height >= 502) {
        btnGoUp.style.opacity = 1;
    } else {
        btnGoUp.style.opacity = 0;
    }
};

btnGoUp.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
