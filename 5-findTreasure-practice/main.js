const button = document.querySelector("button");
const treasure = document.querySelector(".treasure");

button.addEventListener("click", () => {
  treasure.scrollIntoView({ behavior: "smooth", block: "center" });
});
