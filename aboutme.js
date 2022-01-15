function addDataA(result) {
  const templateEl = document.querySelector("#aboutme");
  const container = document.querySelector(".aboutMe");

  templateEl.content.querySelector(".aboutMe__img-tmp").src =
    "http:" + result.image;

  templateEl.content.querySelector(".aboutMe__text-title").textContent =
    result.title;

  templateEl.content.querySelector(".aboutMe__text-p").textContent =
    result.description;

  const clone = document.importNode(templateEl.content, true);
  container.appendChild(clone);
}

function getDataA() {
  return fetch(
    "https://cdn.contentful.com/spaces/lwf2ooxtsp3z/environments/master/entries?access_token=FWhYWbWoO-JmpXm3YnrAtPwSXKBfaUnCasvJ-f7gb0Q&content_type=aboutMe"
  )
    .then((data) => {
      return data.json();
    })
    .then((json) => {
      console.log(json);
      const items = json.items.map((i) => {
        const imgId = i.fields.img.sys.id;
        const img = getImgA(imgId, json);
        return {
          title: i.fields.title,
          description: i.fields.description,
          image: img.fields.file.url,
        };
      });
      return items;
    });
}

function getImgA(id, json) {
  return json.includes.Asset.find((i) => {
    return i.sys.id == id;
  });
}

function main() {
  getDataA().then(function (works) {
    for (const w of works) {
      addDataA(w);
    }
  });
}
main();
