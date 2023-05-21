function randomColors() {
  const colors = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  const randomIndexNumber = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndexNumber];
  return randomColor;
}

const button = document.querySelector(".btn");
button.addEventListener("click", () => {
  const colorInfo = document.querySelector(".color-container span");
  let colorCode = "#";
  for (let i = 0; i < 6; i++) {
    colorCode += randomColors();
  }
  colorInfo.textContent = colorCode;
  document.body.style.backgroundColor = colorCode;
});
