import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

  let profile = document.querySelector(".image");

  profile.addEventListener("click", () => {
    profile.classList.add("active")
  })
});
