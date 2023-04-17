var arun1 = document.getElementById("arun1");
var arun2 = document.getElementById("arun2");

arun1.addEventListener("mouseover", function() {
  arun1.style.color = "red";
  arun1.classList.add("active");
});

arun1.addEventListener("mouseout", function() {
  arun1.style.color = "black";
  arun1.classList.remove("active");
});

var value = prompt("Enter the user input:");

if (value) {
  arun2.textContent = value;
}
