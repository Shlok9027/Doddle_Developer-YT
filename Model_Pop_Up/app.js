// script.js
const darkModeSwitch = document.getElementById("darkModeSwitch");
const blueModeSwitch = document.getElementById("blueModeSwitch");
const greenModeSwitch = document.getElementById("greenModeSwitch");

// Reset all modes
const resetModes = () => {
  document.body.classList.remove("dark-mode", "blue-mode", "green-mode");
  document.body.classList.add("default-mode");
};

// Apply Dark Mode
darkModeSwitch.addEventListener("change", () => {
  resetModes();
  if (darkModeSwitch.checked) {
    document.body.classList.replace("default-mode", "dark-mode");
  }
});

// Apply Blue Mode
blueModeSwitch.addEventListener("change", () => {
  resetModes();
  if (blueModeSwitch.checked) {
    document.body.classList.replace("default-mode", "blue-mode");
  }
});

// Apply Green Mode
greenModeSwitch.addEventListener("change", () => {
  resetModes();
  if (greenModeSwitch.checked) {
    document.body.classList.replace("default-mode", "green-mode");
  }
});
