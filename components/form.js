function formComponent(el) {
  const headerEl = document.createElement("section");
  headerEl.classList.add("form__container");

  headerEl.innerHTML = `
      <div class="form__title">
        <h2>Escribime</h2>
      </div>
      <form class="form__contact">
        <label>
          <h3 class="form__label-title">NOMBRE</h3>
          <input name="name" class="form__input" type="text" required />
        </label>
        <label>
          <h3 class="form__label-title">EMAIL</h3>
          <input name="email" class="form__input" type="text" required />
        </label>
        <label>
          <h3 class="form__label-title">Mensaje</h3>
          <textarea name="message" class="form__textarea form__input" required></textarea>
        </label>
          <button class="form__btn">Enviar</button>
      </form>
  `;

  el.appendChild(headerEl);

  const formEl = headerEl.querySelector(".form__contact");
  sendForm(formEl);
}

function sendForm(formEl) {
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());

    const message = `
        User: ${obj.name} <br> <br>
        Email: ${obj.email} <br> <br>
        Message: ${obj.message}
      `;

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",

      body: JSON.stringify({
        to: "lucasmruiz05@gmail.com",

        message: message,
      }),
    }).then(() => {
      alert(
        "Mensaje enviado. Gracias, " +
          obj.name +
          " por cominucarte! Responderé a la brevedad :)."
      );
    });
  });
}
