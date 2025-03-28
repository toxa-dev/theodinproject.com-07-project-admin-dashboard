const menuTrigger = document.querySelector(".menu-trigger");
const sidabar = document.querySelector(".sidebar");
const searchSvg = document.querySelector("#search-svg");

menuTrigger.addEventListener("click", ExpandMenu);
searchSvg.addEventListener("click", displaySearch);

function displaySearch() {
  if (window.innerWidth > 500) return;

  const searchContainer = document.querySelector(".search-container search");
  searchContainer.classList.toggle("position-absolute");
  searchContainer.classList.toggle("margin-search");

  const searchInput = document.querySelector(".search-container input");
  searchInput.classList.toggle("display-none");

  //change svg color to improve visuals
  searchSvg.classList.toggle("dark");

  // since the search is displayed hide the menu if it's being opened
  if (menuTrigger.classList.contains("active")) {
    ExpandMenu();
  }
}

function ExpandMenu() {
  sidabar.classList.toggle("expand-full-view-port");
  menuTrigger.classList.toggle("active");
}
