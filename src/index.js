import "./styles.css";

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
  let xPos = random(0, 80);
  let yPos = random(0, 80);
  heart.style.left = xPos + "%";
  heart.style.top = yPos + "%";
  clickCount++;
  console.log(clickCount);
});
