// increment or decrement by clicking the button

btndown.addEventListener("click", valueD);
btnup.addEventListener("click", valueU);

function valueD() {
  const span = document.getElementById("count");
  let n = parseInt(span.textContent);
  span.textContent = n - 1;
}
function valueU() {
  const span = document.getElementById("count");
  let n = parseInt(span.textContent);
  span.textContent = n + 1;
}

// continuos increment or decrement by holding down the button

const btn1 = document.querySelector('#btnup');
const count = document.querySelector('#count');
let value = 0;
let timer;

function continuosIncerment() {
  count.innerHTML = ++value;
  
  timer = setTimeout(continuosIncerment, 200);
}

function timeoutClear() {
  clearTimeout(timer);
}

btn1.addEventListener('mousedown', continuosIncerment);

btn1.addEventListener('mouseup', timeoutClear);

btn1.addEventListener('mouseleave', timeoutClear);

const btn2 = document.querySelector('#btndown');
let timer2;

function continuosdecerment() {
  count.innerHTML = --value;
  
  timer2 = setTimeout(continuosdecerment, 200);
}

function timeoutClear2() {
  clearTimeout(timer2);
}

btn2.addEventListener('mousedown', continuosdecerment);

btn2.addEventListener('mouseup', timeoutClear2);

btn2.addEventListener('mouseleave', timeoutClear2);