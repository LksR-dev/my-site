function addDataA(result) {}

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
