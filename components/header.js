function headerComponent(el) {
  const headerEl = document.createElement("div");
  headerEl.classList.add("header__nav");

  headerEl.innerHTML = `
    <a href="./index.html">
      <h2 class="header__logo">LUCAS</h2>
    </a>
      <button class="btn">
          <span class="top-line"></span>
          <span class="middle-line"></span>
          <span class="botton-line"></span>
        </button>
      
      <div class="header__window-nav">
        <nav class="header__nav-links">
          <a href="./portfolio.html">Portfolio</a
          ><a href="./services.html">Servicios</a
          ><a href="./contact.html">Contacto</a>
        </nav>
      </div>
  `;

  el.appendChild(headerEl);
  const btnEl = document.querySelector(".btn");
  const windowEl = document.querySelector(".header__window-nav");

  btnEl.addEventListener("click", () => {
    if (btnEl.classList.contains("open")) {
      btnEl.classList.remove("open");
      windowEl.style.display = "";
    } else {
      btnEl.classList.add("open");
      windowEl.style.display = "inherit";
    }
  });
}
