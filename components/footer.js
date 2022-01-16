function footerComponent(el) {
  const footerEl = document.createElement("footer");
  footerEl.classList.add("footer__container");

  footerEl.innerHTML = `
    <div class="footer__container-logo">
        <a href="./index.html">
          <h2 class="footer__logo">LUCAS</h2>
        </a>
      </div>
      <div class="footer__social">
        <a href="https://www.instagram.com/_lucassruiz/"
          >Instagram<img src="./assets/instagram.png" alt="Instagram"
        /></a>
        <a href="https://www.linkedin.com/in/lucas-ruiz-32510621a/"
          >Linkedin<img src="./assets/linkedin.png" alt="Linkedin"
        /></a>
        <a href="https://github.com/LksR-dev"
          >Github<img src="./assets/github.png" alt="github"
        /></a>
    </div>
  `;

  el.appendChild(footerEl);
}
