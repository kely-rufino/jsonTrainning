let onlyShowPets = false;
let globalData;

fetch("example.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    globalData = data;
    makeUI(data);
  })
  .catch((error) => {
    console.log(error);
  });

const makeUI = (data) => {
  let html = "";

  for (i = 0; i < data.length; i++) {
    html += makePerson(data[i]);
  }

  const element = document.querySelector("#container");
  element.innerHTML = html;
};

const makePerson = (person) => {
  let html = `
    <div>
      <div>
        <label>Name:</label>
        <div>${person.first_name} ${person.last_name}</div>
      </div>
      <div>
      <label>Email:</label>
      <div>${person.email}</div>
    </div>
    </div>
  `;

  return html;
};

function init() {
  const btn = document.getElementById("btn");
  btn.addEventListener("click", toggleShowPets);
}

function toggleShowPets() {
  let people;

  if (onlyShowPets) {
    onlyShowPets = false;
    people = globalData;
  } else {
    onlyShowPets = true;
    people = globalData.filter((value) => value.pets.length > 0);
  }

  makeUI(people);
}

init();
