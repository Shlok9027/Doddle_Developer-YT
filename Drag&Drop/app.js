// const dropZone = document.getElementById("drop-zone");
// const fileInput = document.getElementById("file-input");
// const fileList = document.getElementById("file-list");

// dropZone.addEventListener("click", () => fileInput.click());

// dropZone.addEventListener("dragover", (e) => {
//   e.preventDefault();
//   dropZone.classList.add("drag-over");
// });

// dropZone.addEventListener("dragleave", () => {
//   dropZone.classList.remove("drag-over");
// });

// dropZone.addEventListener("drop", (e) => {
//   e.preventDefault();
//   dropZone.classList.remove("drag-over");
//   handleFiles(e.dataTransfer.files);
// });

// fileInput.addEventListener("change", () => {
//   handleFiles(fileInput.files);
// });

// function handleFiles(files) {
//   fileList.innerHTML = ""; // Clear list
//   for (const file of files) {
//     const item = document.createElement("div");
//     item.textContent = `📄 ${file.name}`;
//     fileList.appendChild(item);
//   }
// }
