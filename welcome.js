function addDataW(result) {
  const templateEl = document.querySelector("#welcome");
  const container = document.querySelector(".hero");

  templateEl.content.querySelector(".hero__title").textContent = result.title;

  const clone = document.importNode(templateEl.content, true);
  container.appendChild(clone);
}

function getDataW() {
  return fetch(
    "https://cdn.contentful.com/spaces/lwf2ooxtsp3z/environments/master/entries?access_token=FWhYWbWoO-JmpXm3YnrAtPwSXKBfaUnCasvJ-f7gb0Q&content_type=welcome"
  )
    .then((data) => {
      return data.json();
    })
    .then((json) => {
      console.log(json);
      const items = json.items.map((i) => {
        const imgId = i.fields.img.sys.id;
        const img = getImgW(imgId, json);
        return {
          title: i.fields.title,
          image: img.fields.file.url,
        };
      });
      return items;
    });
}

function getImgW(id, json) {
  return json.includes.Asset.find((i) => {
    return i.sys.id == id;
  });
}

function main() {
  getDataW().then(function (works) {
    for (const w of works) {
      addDataW(w);
    }
  });
}
main();
