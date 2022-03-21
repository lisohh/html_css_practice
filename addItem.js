function addItem(name, image, content) {
  const article = document.createElement("article");
  article.classList.add("item");
  article.innerHTML = `
          <img src="${image}" alt="${name}" />
          <p>${content}</p>
      `;
  document.querySelector(".items").appendChild(article);

  const a = document.createElement("a");
  a.innerHTML = name;
  document.querySelector("#menu").appendChild(a);
}

function addItemHandle(e) {
  e.preventDefault();
  const name = addItemForm.querySelector("input #name");
  const image = addItemForm.querySelector("input #image");
  const content = addItemForm.querySelector("input #content");
  addItem(name, image, content);
  closeModal();
}

document
  .getElementById("addItemForm")
  .addEventListener("submit", addItemHandle);
