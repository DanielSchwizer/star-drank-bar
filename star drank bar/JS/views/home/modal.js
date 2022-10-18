var btn = document.querySelector(".modal-btn");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.querySelector(".adress-container").innerHTML = "";
  }
};

btn.addEventListener("click", () => {
  modal.style.display = "block";
});