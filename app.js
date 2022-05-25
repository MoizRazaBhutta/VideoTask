let modal = document.getElementById("myModal");
let closeModal = document.querySelector(".close");
let modalContent = document.querySelector(".modal-content");

let pipButton = document.querySelector(".PIP");
let isPip = false;

let openPip = document.querySelectorAll(".open-pip");

let videoFromList = document.querySelectorAll(".video-link");
let videoPlayer = document.getElementById("video-player");

videoFromList.forEach((video) =>
	video.addEventListener("click", (event) => {
		event.preventDefault();
		isPip = false;
		videoPlayer.style.height = "80vh";
		pipButton.classList.add("fa-compress-alt");
		pipButton.classList.remove("fa-expand-alt");
		modal.style.display = "flex";
		modal.classList.add("modal");
		modalContent.classList.remove("video-player--bottom");
		videoPlayer.src = video.dataset.href;
		pipButton.classList.add("fa-compress-alt");
	}),
);

openPip.forEach((pip) =>
	pip.addEventListener("click", (event) => {
		event.stopPropagation();
		isPip = false;
		modal.style.display = "flex";
		videoPlayer.src = event.path[2].dataset.href;
		handlePIP();
	}),
);

closeModal.addEventListener("click", () => {
	modal.style.display = "none";
});

pipButton.addEventListener("click", handlePIP);

window.onclick = function (event) {
	if (event.target == modal && !isPip) {
		modal.style.display = "none";
	}
};

function handlePIP() {
	if (isPip) {
		modalContent.classList.remove("video-player--bottom");
		modal.classList.add("modal");
		modal.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
		videoPlayer.style.height = "80vh";
		pipButton.classList.add("fa-compress-alt");
		pipButton.classList.remove("fa-expand-alt");
		isPip = false;
	} else {
		modalContent.classList.add("video-player--bottom");
		pipButton.classList.add("fa-expand-alt");
		pipButton.classList.remove("fa-compress-alt");
		videoPlayer.style.height = "unset";
		modal.classList.remove("modal");
		modal.style.backgroundColor = "unset";
		isPip = true;
	}
}
