function addDataP(result) {
  const templateEl = document.querySelector("#portfolio");
  const container = document.querySelector(".portfolio__container");

  templateEl.content.querySelector(".portfolio__img").src =
    "http:" + result.image;

  templateEl.content.querySelector(".portfolio__link").href = result.link;

  templateEl.content.querySelector(".portfolio__card-title").textContent =
    result.title;

  templateEl.content.querySelector(".portfolio__card-p").textContent =
    result.description;

  const clone = document.importNode(templateEl.content, true);
  container.appendChild(clone);
}

function getDataP() {
  return fetch(
    "https://cdn.contentful.com/spaces/lwf2ooxtsp3z/environments/master/entries?access_token=FWhYWbWoO-JmpXm3YnrAtPwSXKBfaUnCasvJ-f7gb0Q&content_type=portfolio"
  )
    .then((data) => {
      return data.json();
    })
    .then((json) => {
      console.log(json);
      const items = json.items.map((i) => {
        const imgId = i.fields.img.sys.id;
        const img = getImgP(imgId, json);
        return {
          title: i.fields.title,
          description: i.fields.description,
          image: img.fields.file.url,
          link: i.fields.link,
        };
      });
      return items;
    });
}

function getImgP(id, json) {
  return json.includes.Asset.find((i) => {
    return i.sys.id == id;
  });
}

function main() {
  getDataP().then(function (works) {
    for (const w of works) {
      addDataP(w);
    }
  });

  headerComponent(document.querySelector(".header__portfolio"));
  footerComponent(document.querySelector(".footer"));
}
main();
