// Get the modal
var modal = document.getElementById("myModal");
var closeModal = document.querySelector('.close');

// Get the button that opens the modal
var btn = document.querySelector(".video-link");

btn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
