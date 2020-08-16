const addForm = document.querySelector(".add");
const list = document.querySelector("ul");
const del = document.querySelector(".delete");

const generateTemplate = (todo) => {
  const html = `<li>
  <span>${todo}</span>
  <i class="far fa-trash-alt delete"></i>
</li>`;
  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const toDo = addForm.todo.value.trim();
  generateTemplate(toDo);
  addForm.reset();
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
