/* document.addEventListener("DOMContentLoaded", function () {
  const divClique = document.querySelector(".searchIconBox");
  const divOculta = document.querySelector(".input");

  let isVisible = false;

  divClique.addEventListener("click", function () {
      if (!isVisible) {
          divOculta.style.opacity = 1;
      } else {
          divOculta.style.opacity = 0;
      }

      isVisible = !isVisible;
  });
}); */

var div2 = document.getElementById("input");
var div2Visivel = false;

function mostrarDiv2() {
    if (div2Visivel) {
        div2.style.display = "none";
    } else {
        div2.style.display = "block";
        div2.style.opacity = "100%";

    }
    div2Visivel = !div2Visivel;
}