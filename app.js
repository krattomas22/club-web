const news = [
  { title: "Nábor dětí – jaro 2026", date: "2026-01-10", text: "Otevíráme nové skupiny přípravky. Přihlášky online." },
  { title: "Zimní soustředění", date: "2025-12-18", text: "Informace pro členy: termín, platby, seznam věcí." },
  { title: "Změna rozpisu haly", date: "2025-12-02", text: "Aktualizovali jsme časy některých skupin." },
];

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("cs-CZ", { year: "numeric", month: "long", day: "numeric" });
}

function renderNews() {
  const grid = document.getElementById("newsGrid");
  grid.innerHTML = news.map(item => `
    <article class="news">
      <h3 class="news-title">${item.title}</h3>
      <div class="news-meta">${formatDate(item.date)}</div>
      <p class="news-text">${item.text}</p>
    </article>
  `).join("");
}

function setupNav() {
  const btn = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(open));
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
renderNews();
setupNav();
