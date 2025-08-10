function closeBtn() {
  const closeBtn = document.querySelector(".side-menu-bar");
  closeBtn.style.display = "none";
}

function showMenuIcon() {
  const menuIcon = document.querySelector(".side-menu-bar");
  menuIcon.style.display = "block";
}

function toggleBtn() {
  document.body.classList.toggle("darkMode");
  const logo = document.getElementById("logo");
  if (document.body.classList.contains("darkMode")) {
    logo.src = "resources/logo-dark.svg";
    localStorage.setItem("mode", "darkMode");
  } else {
    logo.src = "resources/logo-light.svg";
    localStorage.setItem("mode", "light");
  }
}

window.onload = function () {
  const mode = localStorage.getItem("mode");
  const logo = document.getElementById("logo");
  if (mode === "dark") {
    document.body.classList.add("darkMode");
    logo.src = "resources/logo-dark.svg";
  } else {
    document.body.classList.remove("darkMode");
    logo.src = "resources/logo-light.svg";
  }
};
