import "./styles.css";
import shine0 from "./assets/shine0.mp3";
import shine1 from "./assets/shine1.mp3";
import shine2 from "./assets/shine2.mp3";
import shine3 from "./assets/shine3.mp3";
import shine4 from "./assets/shine4.mp3";
import shine5 from "./assets/shine5.mp3";

// function that gives random number between min and max inclusive
function random(min, max) {
  return min + Math.random() * (max + 1 - min);
}

// Work out number of total pixels on body and then decide what fraction of those should contain stars
const body = document.querySelector("body");
const canvasSize = body.offsetWidth * body.offsetHeight;
const starsFraction = canvasSize / 4000;

// loop that will add each star at a time
// The xPos and yPos here will be percentages, hence needing a random number between 0 and 100.
// Alpha is the opacity, which won't go below 0.5 because that will make it hard to see.
// The size is between 1px and 2px, as anything smaller will be hard to see and anything bigger won't look as much like a star.

for (let i = 0; i < starsFraction; i++) {
  let xPos = random(0, 100);
  let yPos = random(0, 100);
  let alpha = random(0.5, 1);
  let size = random(1, 2);
  let color = "#ffffff";

  // Add each star and use properties above to add styling

  const star = document.createElement("div");
  star.style.position = "absolute";
  star.style.left = xPos + "%";
  star.style.top = yPos + "%";
  star.style.opacity = alpha;
  star.style.width = size + "px";
  star.style.height = size + "px";
  star.style.backgroundColor = color;
  document.body.appendChild(star);
}

// Add a heart randomly in the stars

let xPos = random(0, 80);
let yPos = random(0, 100);
let alpha = 1;

const heart = document.createElement("div");
heart.id = "heart";
heart.style.left = xPos + "%";
heart.style.top = yPos + "%";
heart.style.opacity = alpha;
document.body.appendChild(heart);

// Make the heart change position randomly on click
let clickCount = 0;
heart.addEventListener("click", () => {
  if (clickCount == 2) {
    heart.style.display = "none";
    HB();
  }
  let xPos = random(0, 80);
  let yPos = random(0, 80);
  heart.style.left = xPos + "%";
  heart.style.top = yPos + "%";
  clickCount++;
  console.log(clickCount);

  // randomly choose sound effect to play on click
  let max = 5;
  let min = 0;
  let num = Math.floor(Math.random() * (max - min + 1)) + min;

  const audio = [shine0, shine1, shine2, shine3, shine4, shine5];
  const sound = new Audio(audio[num]);
  sound.play();
});

function HB() {
  const wish = document.querySelector(".wish");
  const wish2 = document.querySelector(".wish2");
  wish.classList.add("active");

  setTimeout(() => {
    wish2.classList.add("active");
  }, 5000);
}
