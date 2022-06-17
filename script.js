const add_list_item = function () {
  const input = document.querySelector(".form-control");
  const listing = document.querySelector(".listing");
  const make_li = document.createElement("p");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  make_li.innerText = " " + input.value;
  make_li.prepend(checkbox);
  make_li.classList.add("checker");
  listing.appendChild(make_li);

  checkbox.addEventListener("click", function () {
    make_li.style.textDecoration = "line-through";
  });
  make_li.addEventListener("dblclick", function () {
    make_li.style.textDecoration = "line-through";
    listing.removeChild(make_li);
  });
};

const crossOut = function () {
  //   text.classList.add("strike");
  console.log(text);
};

document.querySelector(".btn-primary").addEventListener("click", add_list_item);
