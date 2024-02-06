const randomize = document.getElementById("randomize");
const adviceNum = document.getElementById("adviceid");
const adviceText = document.querySelector("#advicetext");

window.onload = showQuote;

randomize.addEventListener("click", function(){
    showQuote();
});

function showQuote(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) => {
        adviceNum.textContent = data.id;
        adviceText.textContent = '"'+ data.advice + '"';
    })
    .catch((error) => {
        alert(`Error ${error}`);
    });
}

