const binaryInput = document.getElementById("binary");
const convertBtn = document.getElementById("convertBtn");
const formContainer = document.querySelector(".container");
const decimalDisp = document.querySelector("#decimalResult");
let binaryInputValue = 0;

formContainer.addEventListener("submit", (e) => {
  e.preventDefault();
});

binaryInput.addEventListener("input", (e) => {
  binaryInputValue = e.target.value;
});

convertBtn.addEventListener("click", () => {
  decimalDisp.innerText = parseInt(binaryInputValue, 2);
});
