let list = false;

const add_list_item = function () {
  const input = " " + document.querySelector(".form-control").value;
  const listing = document.querySelector(".listing");
  const make_li = document.createElement("li");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  make_li.appendChild(checkbox);

  make_li.appendChild(document.createTextNode(input));
  make_li.classList.add("checker");
  listing.appendChild(make_li);

  document.querySelector(".container").appendChild(make_li);
  list = true;
  console.log(list);
};

const crossOut = function () {
  const text = document.querySelector(".checker").textContent;
  //   text.classList.add("strike");
  console.log(text);
};

document.querySelector(".btn-primary").addEventListener("click", add_list_item);
document.querySelector(".checker").addEventListener("click", crossOut);
