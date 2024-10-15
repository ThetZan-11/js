let nav = document.createElement("nav");
let container = document.createElement("div");
let logo = document.createElement("a");
let btn = document.createElement("button");
let icon = document.createElement("i");

nav.appendChild(container);
container.appendChild(logo);
container.appendChild(btn);
btn.appendChild(icon);
document.body.appendChild(nav);

nav.classList.add("navbar", "bg-success", "mb-5");
container.classList.add("container");
logo.classList.add("navbar-brand", "h1", "my-0", "text-white");
btn.classList.add("btn", "btn-outline-warning");
icon.classList.add("fa-solid", "fa-plus");

logo.innerText = "Note Book";




