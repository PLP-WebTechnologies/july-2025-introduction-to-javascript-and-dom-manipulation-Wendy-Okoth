// =========================
// Part 1: JavaScript Basics
// =========================
document.getElementById("check-age-btn").addEventListener("click", () => {
  let age = prompt("Enter your age:");
  age = Number(age);

  if (age >= 18) {
    document.getElementById("age-result").textContent = "You are an adult ✅";
  } else {
    document.getElementById("age-result").textContent = "You are a minor ❌";
  }
});

// =========================
// Part 2: Functions
// =========================
// Function 1: Calculate Total
function showTotal() {
  // Get values from input fields
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);

  // Calculate total
  let total = num1 + num2;

  // Display result
  document.getElementById("total-result").textContent = `Total is: ${total}`;
}

// Function 2: Toggle Text Visibility
function toggleText() {
  let textElement = document.getElementById("toggle-text");
  if (textElement.style.display === "none") {
    textElement.style.display = "block";
  } else {
    textElement.style.display = "none";
  }
}

// =========================
// Part 3: Loops
// =========================
// Example 1: For Loop
document.getElementById("list-numbers-btn").addEventListener("click", () => {
  let list = document.getElementById("number-list");
  list.innerHTML = ""; // clear old list

  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = `Number: ${i}`;
    list.appendChild(li);
  }
});

// Example 2: While Loop (Countdown)
document.getElementById("countdown-btn").addEventListener("click", () => {
  let result = "";
  let count = 5;
  while (count > 0) {
    result += count + " ";
    count--;
  }
  document.getElementById("countdown-result").textContent = result;
});

// =========================
// Part 4: DOM Manipulation
// =========================
// Interaction 1: Change Background Color
document.getElementById("change-color-btn").addEventListener("click", () => {
  let buttons = document.querySelectorAll("button"); // select all buttons

  // Check the current color (using the first button as reference)
  let isLightGrey = buttons[0].style.backgroundColor === "grey";

  buttons.forEach((btn) => {
    btn.style.backgroundColor = isLightGrey ? "blue" : "grey"; 
    btn.style.color = "white"; // optional: keeps text visible on purple
  });
});

// Interaction 2: Add Alphabet items
let alphabetCounter = 0;
const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

document.getElementById("add-item-btn").addEventListener("click", () => {
  let list = document.getElementById("dynamic-list");
  let newItem = document.createElement("li");

  if (alphabetCounter < alphabets.length) {
    newItem.textContent = alphabets[alphabetCounter];
    list.appendChild(newItem);
    alphabetCounter++;
  } else {
    alert("✅ All alphabets have been added!");
  }
});

// Interaction 3: Toggle footer color on click
document.querySelector("footer").addEventListener("click", () => {
  let footer = document.querySelector("footer");
  footer.style.backgroundColor =
    footer.style.backgroundColor === "darkblue" ? "#004080" : "darkblue";
});