function addItem(name, image, content) {
  const article = document.createElement("article");
  article.classList.add("item");
  article.id = name;
  article.innerHTML = `
          <img class="image" src="${image}" alt="${name}" />
          <h3>${name}</h3>
          <p>${content}</p>
      `;
  document.querySelector(".items").appendChild(article);

  const a = document.createElement("a");
  a.innerHTML = name;
  document.querySelector("#menu").appendChild(a);
}

function addItemHandle(e) {
  e.preventDefault();
  const name = addItemForm.querySelector("#name").value;
  const image = addItemForm.querySelector("#image").value;
  const content = addItemForm.querySelector("#content").value;
  addItem(name, image, content);
  closeModal();
}

document
  .getElementById("addItemForm")
  .addEventListener("submit", addItemHandle);
