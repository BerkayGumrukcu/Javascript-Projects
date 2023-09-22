const colors = ["green", "red", "rgba(133,122,200)","#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

//! ECS6 fetch() ile internetten bir API verisi alıp gelen öğeleri ekrana bastır.