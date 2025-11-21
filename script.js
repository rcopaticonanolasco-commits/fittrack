const toggleMenu = document.getElementById("toggleMenu");
const sidebar = document.getElementById("sidebar");

if (toggleMenu) {
  toggleMenu.addEventListener("click", () => {
    sidebar.classList.toggle("hide");
  });
}





//PARA REPRODUCIR AUDIO Y VIDEO
document.querySelectorAll(".media-card").forEach(card => {
  const audio = card.querySelector(".audio-player");
  const playBtn = card.querySelector(".play-btn");
  audio.src = card.dataset.audio;

  playBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    // Pausar todos los demás audios
    document.querySelectorAll(".audio-player").forEach(a => {
      if (a !== audio) {
        a.pause();
        a.parentElement.querySelector(".play-btn").textContent = "▶️";
      }
    });

    if (audio.paused) {
      audio.play();
      playBtn.textContent = "⏸️";
    } else {
      audio.pause();
      playBtn.textContent = "▶️";
    }
  });

  // También reproducir/pause al hacer clic en la card
  card.addEventListener("click", () => {
    playBtn.click();
  });
});

