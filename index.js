// SIDE-NAV
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("btnclose").style.visibility = "visible";
  document.getElementById("logoBookmark").style.position = "fixed";
  document.body.style.overflow = "hidden";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0";
  document.getElementById("btnclose").style.visibility = "hidden";
  document.getElementById("logoBookmark").style.position = "relative";
  document.body.style.overflow = "unset";
}
// SIDE-NAV

// FEATURES
const openTab = (e, tab) => {
  let tabContent, tabLink;

  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  tabLink = document.getElementsByClassName("tab-link");
  for (i = 0; i < tabLink.length; i++) {
    tabLink[i].className = tabLink[i].className.replace(" active", "");
  }
  document.getElementById(tab).style.display = "block";
  e.curentTarget.className += " active";
};
document.getElementById("defaultOpen").click();
// FEATURES

// FAQ
let dropdownClose = document.getElementsByClassName("dropdown");
dropdown = function (num) {
  document.getElementById(`drop${num}`).classList.toggle("show");
};
dropdownClose.onclick = function (event) {
  if (!event.target.matches(".dropdown")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
// FAQ
