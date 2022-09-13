const listGroup = document.querySelector(".list-group");
const listPosition = document.querySelector("#list-position");
const usersList = document.getElementsByTagName("li"); 

const users = [
  "Yasmim Rodrigues",
  "Karolina Morais",
  "Huylnna Melo",
  "Izanara Almeida",
  "Elaine Nascimento",
  "Bruna Frade",
  "Ester Moreira",
  "Gustavo de Almeida",
  "Emily Cristine",
  "Millene Carvalho",
  "Roberto Roseira",
  "Isabela Peres"
];

users.forEach((user, index) => {
  listGroup.insertAdjacentHTML(
    "beforeend",
    `
    <li class="list-group-item">${user}
    </li>
    `
  );
});

users.forEach((user, index) => {
  listPosition.innerHTML += `
    <div class="list-group">
      <div class="list-group-item">
        ${index + 1}º
      </div>
    </div>`;
});

document.querySelector("#btn").addEventListener("click", () => {
  insertAfter(usersList[0], usersList[usersList.length - 1]); // move a primeira para depois da última
});

document.querySelector("#btn2").addEventListener("click", () => {
  listGroup.insertBefore(usersList[usersList.length - 1], usersList[0]); // move a última para antes da primeira
});

document.querySelector("#btn3").addEventListener("click", () => {
  const shuffle = (items) => {
    let cached = items.slice(0),
      temp,
      i = cached.length,
      rand;
    while (--i) {
      rand = Math.floor(i * Math.random());
      temp = cached[rand];
      cached[rand] = cached[i];
      cached[i] = temp;
    }
    return cached;
  };
  const shuffleNodes = () => {
    let nodes = listGroup.children,
      i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = shuffle(nodes);
    while (i < nodes.length) {
      listGroup.appendChild(nodes[i]);
      ++i;
    }
  };
  shuffleNodes();
}); //Randomizar a lista

const insertAfter = (newNode, referenceNode) => {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

// let API_URL_TEAM_1 =
//   "https://servicedesk.italo.br/api/v1/Team/62ab9672c15fad3dd/users?primaryFilter=&select=salutationName%252CfirstName%252ClastName%252CmiddleName%252Cname%252CuserName%252CteamRole%252CsalutationName%252CfirstName%252ClastName%252CmiddleName%252Cname%252CuserName%252CteamRole&maxSize=100&offset=0&orderBy=name&order=asc";
// let USERS_NAMES = [];

// window.onload = () => {
//   fetch(`${API_URL_TEAM_1}${USERS_NAMES}`)
//     .then(response => response.json())
//     .then(data => {
//       listPosition.innerHTML = json.stringify(data);
//     })
//     .catch(err => console.error(err));
// };

// const reqXMLHttpRequest = () => {
//   let xHttp = new XMLHttpRequest();
//   xHttp.onreadystatechange = () => {
//     this.readState === 4 && this.status === 200
//       ? (listPosition.innerHTML = xHttp.responseText)
//       : console.status(400, "Deu ruim");
//   };

//   xHttp.open("GET", API_URL_TEAM_1 + USERS_NAMES, true);
//   xHttp.setRequestHeader("Authorization", "Basic ZW51YmU6VHViYXJAMDE=");
//   xHttp.setRequestHeader("Content-Type", "application/json");
//   xHttp.send();
// };
