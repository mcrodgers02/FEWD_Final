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

const clownModal = document.querySelector("#clown-click");
const clown = document.querySelector(".clown");
clownModal.addEventListener("click", function() {
  clown.classList.toggle("info-open");
});

document.querySelector(".clown-close").addEventListener("click", function() {
  clown.classList.remove("info-open");
});

/* - - - - - - - STAR FISH ASIDE - - - - - - - -  */

const starModal = document.querySelector("#star-click");
const star = document.querySelector(".star");
starModal.addEventListener("click", function() {
  star.classList.toggle("info-open");
});

document.querySelector(".star-close").addEventListener("click", function() {
  star.classList.remove("info-open");
});

/* - - - - - - - SHARK ASIDE - - - - - - - -  */

const sharkModal = document.querySelector("#shark-click");
const shark = document.querySelector(".shark");
sharkModal.addEventListener("click", function() {
  shark.classList.toggle("info-open");
});

document.querySelector(".shark-close").addEventListener("click", function() {
  shark.classList.remove("info-open");
});

// /* - - - - - - - BLUE WHALE ASIDE - - - - - - - -  */

const blueModal = document.querySelector("#blue-whale-click");
const blueWhale = document.querySelector(".blue-whale");
blueModal.addEventListener("click", function() {
  blueWhale.classList.toggle("info-open");
});

document.querySelector(".whale-close").addEventListener("click", function() {
  blueWhale.classList.remove("info-open");
});

// /* - - - - - - - SQUID ASIDE - - - - - - - -  */

const squidModal = document.querySelector("#squid-click");
const squid = document.querySelector(".squid");
squidModal.addEventListener("click", function() {
  squid.classList.toggle("info-open");
});

document.querySelector(".squid-close").addEventListener("click", function() {
  squid.classList.remove("info-open");
});
