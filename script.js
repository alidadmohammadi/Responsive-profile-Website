const description = document.querySelector("#description");
const textButton = document.querySelector("#change-text");

textButton.addEventListener("click", function(){
    description.textContent= "I enjoy learning programming and technology"
});

const themeButton = document.querySelector("#change-theme");

themeButton.addEventListener("click", function(){
    document.body.classList.toggle("dark");
});