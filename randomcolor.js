const colors = ["green", "red", "black", "orange", "pink", "magenta", "violet", "yellow", "blue", "maroon", "brown"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const colorText = document.querySelector(".text-color");


//#32DE28
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const hexPage = document.querySelector(".hex-page");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNum();

    document.body.style.backgroundColor = colors[randomNumber];
    colorText.textContent = colors[randomNumber];
});

hexPage.addEventListener("click", function () {
    hexPage.style.color = "red";
    btn.addEventListener("click", function () {
        
        let hexColor = "#";
        for (let i = 0; i < 6; i++){
            hexColor += hex[getRandomNumforhex()];
        }
        colorText.textContent = hexColor;
        document.body.style.backgroundColor = hexColor;
    });
});

function getRandomNum() {
        return Math.floor(Math.random() * colors.length);
}
function getRandomNumforhex() {
        return Math.floor(Math.random() * hex.length);
}