// 🎉 Wedding Date (SET YOUR DATE HERE)
const weddingDate = new Date("february 22, 2026 10:30:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(timer);
        document.querySelector(".countdown").innerHTML = "🎉 We're Married! 🎉";
    }
}, 1000);


// 💕 Floating Love Emojis
const loveContainer = document.querySelector(".floating-love");
const emojis = ["❤️","💖","💕","💘","💍"];

function createLove() {
    const love = document.createElement("span");
    love.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    love.style.left = Math.random() * 100 + "vw";
    love.style.animationDuration = (Math.random() * 5 + 5) + "s";
    love.style.fontSize = (Math.random() * 20 + 15) + "px";
    loveContainer.appendChild(love);

    setTimeout(() => {
        love.remove();
    }, 8000);
}

setInterval(createLove, 400);


// 💌 RSVP
document.getElementById("rsvpForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank you for your love & RSVP ❤️");
});
