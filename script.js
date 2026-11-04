console.log ("Hellow World")
const button = document.getElementById("actionBtn");
const output = document.getElementById("output");

let count = 0;

button.addEventListener("click", () => {
  count++;
  output.textContent = `You clicked ${count} time${count === 1 ? "" : "s"}!`;
});