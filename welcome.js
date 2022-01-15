function getData() {
  return fetch(
    "https://cdn.contentful.com/spaces/lwf2ooxtsp3z/environments/master/entries?access_token=FWhYWbWoO-JmpXm3YnrAtPwSXKBfaUnCasvJ-f7gb0Q&content_type=welcome"
  )
    .then((data) => {
      return data.json();
    })
    .then((json) => console.log(json));
}

function main() {
  getData();
}
main();
