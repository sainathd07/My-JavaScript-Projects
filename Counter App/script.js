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