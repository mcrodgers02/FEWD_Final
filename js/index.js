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
  document.querySelector(".clown").classList.toggle("info-open");
});

document.querySelector(".info-close").addEventListener("click", function() {
  document.querySelector(".clown").classList.remove("info-open");
});

/* - - - - - - - STAR FISH ASIDE - - - - - - - -  */

const menuController2 = document.querySelector("#star-click");
menuController2.addEventListener("click", function() {
  document.querySelector(".star").classList.toggle("info-open");
});

document.querySelector(".info-close").addEventListener("click", function() {
  document.querySelector(".star").classList.remove("info-open");
});

/* - - - - - - - SHARK ASIDE - - - - - - - -  */

const menuController3 = document.querySelector("#shark-click");
menuController3.addEventListener("click", function() {
  document.querySelector(".shark").classList.toggle("info-open");
});

document.querySelector(".info-close").addEventListener("click", function() {
  document.querySelector(".shark").classList.remove("info-open");
});

// /* - - - - - - - BLUE WHALE ASIDE - - - - - - - -  */

const menuController4 = document.querySelector("#blue-whale-click");
menuController4.addEventListener("click", function() {
  document.querySelector(".blue-whale").classList.toggle("info-open");
});

document.querySelector(".info-close").addEventListener("click", function() {
  document.querySelector(".blue-whale").classList.remove("info-open");
});

// /* - - - - - - - SQUID ASIDE - - - - - - - -  */

const menuController5 = document.querySelector("#squid-click");
menuController5.addEventListener("click", function() {
  document.querySelector(".squid").classList.toggle("info-open");
});

document.querySelector(".info-close").addEventListener("click", function() {
  document.querySelector(".squid").classList.remove("info-open");
});
