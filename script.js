const musics = [
  {
    title: "Davido - FEEL",
    link: "https://example.com/feel.mp3"
  },
  {
    title: "Fally Ipupa - Mayday",
    link: "https://example.com/mayday.mp3"
  },
  {
    title: "Titre seulement (pas de lien)",
    link: ""
  }
];

const musicList = document.getElementById("music-list");
const search = document.getElementById("search");

function displayMusics(list) {
  musicList.innerHTML = "";
  list.forEach(music => {
    const div = document.createElement("div");
    div.className = "music";

    div.innerHTML = `
      <h3>${music.title}</h3>
      <div class="buttons">
        ${music.link ? `<a href="${music.link}" target="_blank">▶ Écouter</a>` : ""}
        ${music.link ? `<a href="${music.link}" download class="download">⬇ Télécharger</a>` : ""}
      </div>
    `;

    musicList.appendChild(div);
  });
}

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  const filtered = musics.filter(m =>
    m.title.toLowerCase().includes(value)
  );
  displayMusics(filtered);
});

displayMusics(musics);
