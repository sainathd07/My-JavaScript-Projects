const fixedColors = ["Violet", "Indigo","Blue", "Green", "Yellow", "Orange", "Red" ];

const HexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');

btn1.addEventListener('click', function() {
  document.body.style.backgroundColor = fixedColors[Math.floor(Math.random() * fixedColors.length)];
})

btn2.addEventListener('click',function() {
  let hexColor = "#";

  for(let i=0; i<6;i++) {
   hexColor += HexColors[RandomNumber()];
  }

  document.body.style.backgroundColor = hexColor;
})

function RandomNumber() {
  return Math.floor(Math.random() * HexColors.length);
}