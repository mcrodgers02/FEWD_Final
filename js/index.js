/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.querySelector("#myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

/* - - - - - - - CLOWN FISH ASIDE - - - - - - - -  */

const menuController = document.querySelector("#clown-click");
menuController.addEventListener("click", function() {
  document.querySelector(".info").classList.toggle("info-open");
});

document.querySelector(".info-close").addEventListener("click", function() {
  document.querySelector(".info").classList.remove("info-open");
});

// /* - - - - - - - BLUE WHALE ASIDE - - - - - - - -  */

const menuController2 = document.querySelector("#blue-whale-click");
menuController2.addEventListener("click", function() {
  document.querySelector(".info").classList.toggle("info-open");
});

document.querySelector(".info-close").addEventListener("click", function() {
  document.querySelector(".info").classList.remove("info-open");
});
