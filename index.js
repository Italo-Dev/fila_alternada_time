const listGroup = document.querySelector(".list-group");
const listPosition = document.querySelector("#list-position");
const usersList = document.getElementsByTagName("li"); 

const users = [
  "Yasmim Rodrigues",
  "Juliane Maltez",
  "Thaís Park",
  "Caroline Marreira",
  "Izanara Almeida",
  "Bruna Frade",
  "Ester Moreira",
  "Gustavo de Almeida",
  "Emily Cristine",
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
