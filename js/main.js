const themeSwitcher = document.getElementById("theme-switcher");
const currentTheme = localStorage.getItem("theme");
themeSwitcher.addEventListener("click", handleThemeSwitch);

function handleThemeSwitch() {
  activateTheme(
    localStorage.getItem("theme") === "dark"
    ? "light"
    : "dark");
}

function activateTheme(theme) {
  document.body.classList.add("theme-switching");
  localStorage.setItem("theme", theme);
  document.body.setAttribute("data-theme", theme);
  const transitionEndHandler = () => {
    document.body.classList.remove("theme-switching");
    document.body.removeEventListener("transitionend", transitionEndHandler);
  };
  document.body.addEventListener("transitionend", transitionEndHandler, {once: true});
}

function updateThemeSwitcherUI() {
  const themeSwitcherCheckbox = document.getElementById("theme-switcher");
  if (currentTheme) {
    themeSwitcherCheckbox.checked = currentTheme === "dark";
  } else {
    const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    themeSwitcherCheckbox.checked = prefersDarkTheme.matches;
  }
}

function initializeTheme() {
  updateThemeSwitcherUI();
  if (currentTheme) {
    activateTheme(currentTheme);
  } else {
    const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    activateTheme(
      prefersDarkTheme.matches
      ? "dark"
      : "light");
  }
}
window.onload = initializeTheme;