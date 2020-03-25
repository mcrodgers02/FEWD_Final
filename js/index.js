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

/* - - - - - - - CLOWN FISH MODAL - - - - - - - -  */

const clownModal = document.querySelector("#clown-click");
const clown = document.querySelector(".clown");
clownModal.addEventListener("click", function() {
  clown.classList.toggle("modal-open");
});

document.querySelector(".clown-close").addEventListener("click", function() {
  clown.classList.remove("modal-open");
});

/* - - - - - - - STAR FISH MODAL - - - - - - - -  */

const starModal = document.querySelector("#star-click");
const star = document.querySelector(".star");
starModal.addEventListener("click", function() {
  star.classList.toggle("modal-open");
});

document.querySelector(".star-close").addEventListener("click", function() {
  star.classList.remove("modal-open");
});

/* - - - - - - - SHARK MODAL - - - - - - - -  */

const sharkModal = document.querySelector("#shark-click");
const shark = document.querySelector(".shark");
sharkModal.addEventListener("click", function() {
  shark.classList.toggle("modal-open");
});

document.querySelector(".shark-close").addEventListener("click", function() {
  shark.classList.remove("modal-open");
});

// /* - - - - - - - BLUE WHALE MODAL - - - - - - - -  */

const blueModal = document.querySelector("#blue-whale-click");
const blueWhale = document.querySelector(".blue-whale");
blueModal.addEventListener("click", function() {
  blueWhale.classList.toggle("modal-open");
});

document.querySelector(".whale-close").addEventListener("click", function() {
  blueWhale.classList.remove("modal-open");
});

// /* - - - - - - - SQUID MODAL - - - - - - - -  */

const squidModal = document.querySelector("#squid-click");
const squid = document.querySelector(".squid");
squidModal.addEventListener("click", function() {
  squid.classList.toggle("modal-open");
});

document.querySelector(".squid-close").addEventListener("click", function() {
  squid.classList.remove("modal-open");
});
