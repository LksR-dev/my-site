function addDataS(result) {
  const templateEl = document.querySelector("#services");
  const container = document.querySelector(".services__container");

  templateEl.content.querySelector(".services__img").src =
    "http:" + result.image;

  templateEl.content.querySelector(".services__card-title").textContent =
    result.title;

  templateEl.content.querySelector(".services__card-p").textContent =
    result.description;

  const clone = document.importNode(templateEl.content, true);
  container.appendChild(clone);
}

function getDataS() {
  return fetch(
    "https://cdn.contentful.com/spaces/lwf2ooxtsp3z/environments/master/entries?access_token=FWhYWbWoO-JmpXm3YnrAtPwSXKBfaUnCasvJ-f7gb0Q&content_type=service"
  )
    .then((data) => {
      return data.json();
    })
    .then((json) => {
      console.log(json);
      const items = json.items.map((i) => {
        const imgId = i.fields.img.sys.id;
        const img = getImgS(imgId, json);
        return {
          title: i.fields.title,
          description: i.fields.description,
          image: img.fields.file.url,
        };
      });
      return items;
    });
}

function getImgS(id, json) {
  return json.includes.Asset.find((i) => {
    return i.sys.id == id;
  });
}

function main() {
  getDataS().then(function (works) {
    for (const w of works) {
      addDataS(w);
    }
  });
}
main();
