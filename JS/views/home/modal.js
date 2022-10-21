/**
 * variables que traen elementos html
 */
var btn = document.querySelector(".modal-btn");
var modal = document.getElementById("myModal");
var span = document.querySelector(".close");
/**
 * si hay un click en el span el modal desaparece
 */
span.onclick = () => {
  modal.style.display = "none";
};

/**
 *
 * @param {evento} event
 * si se clickea fuera del modal el mismo desaparece
 */
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
/**
 * si se clickea en el boton del modal el  modal aparece
 */
btn.addEventListener("click", () => {
  modal.style.display = "block";
});
