let imgCount=1;
const btn = document.querySelector('#btn');
const container = document.querySelector('.container');
btn.addEventListener('click', () => {
    console.log(imgCount%8);
    container.style.background = `url('backgrounds/${imgCount%8}.jpg')`;
    container.style.backgroundSize = `cover`;
    container.style.filter = `blur(3px)`;
    imgCount++;
});

let i = 1;
const secondsHand = document.querySelector('.seconds-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
function setSecond() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
 
    const minutes = now.getMinutes();
    const minutesDegree = ((minutes/60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

    const hours = now.getHours();
    const hoursDegree = ((hours/12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}
setInterval(setSecond, 1000);
