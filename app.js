// Modal
let modal = document.getElementById("myModal");
let closeModal = document.querySelector(".close");
let modalContent = document.querySelector(".modal-content");

// Picture in Picture button
let pipButton = document.querySelector(".PIP");
let isPip = false;

// Get the button that opens the modal
let videoFromList = document.querySelector(".video-link");
let videoPlayer = document.getElementById("video-player");

videoFromList.addEventListener("click", (event) => {
  event.preventDefault();
  modal.style.display = "flex";
  videoPlayer.src = videoFromList.href;
});

// When the user clicks on <span> (x), close the modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

pipButton.addEventListener("click", () => {
  if (isPip) {
    modalContent.classList.remove("video-player--bottom");
    modal.classList.add("modal");
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    isPip = false;
  } else {
    modalContent.classList.add("video-player--bottom");
    modal.classList.remove("modal");
    modal.style.backgroundColor = "unset";
    isPip = true;
  }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal && !isPip) {
    modal.style.display = "none";
  }
};
