const form = document.querySelector(".newTask"),
  section = document.getElementById("section"),
  taskHead = document.querySelector(".taskHead"),
  taskText = document.querySelector(".taskContent");

form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  if (taskHead.value != "" && taskText.value != "") {
    let taskBody = `<div class="task">
    <span class="fa fa-star icon"></span>
    <p class="headTitle">${taskHead.value}</p>
    <div class="icons">
      <span class="fa fa-trash icon"></span>
      <span class="fa fa-angry icon"></span>
    </div>
    <div class="textTask hide">
    <p class="text">${taskText.value}</p>
    </div>
  </div>`;

    section.innerHTML += taskBody;
    taskHead.value = "";
    taskText.value = "";
  } else {
    alert("Please Write Task");
  }
});

section.addEventListener("click", (eo) => {
  let heartIcon = `<span class="fa fa-heart icon"></span>`;

  switch (eo.target.className) {
    case "fa fa-trash icon":
      eo.target.parentElement.parentElement.remove();
      break;
    case "fa fa-angry icon":
      eo.target.classList.add("hide");
      eo.target.parentElement.parentElement
        .getElementsByClassName("headTitle")[0]
        .classList.add("finish");
      eo.target.parentElement.innerHTML += heartIcon;
      break;
    case "fa fa-heart icon":
      eo.target.classList.add("hide");
      eo.target.parentElement.parentElement
        .getElementsByClassName("headTitle")[0]
        .classList.remove("finish");
      eo.target.parentElement
        .getElementsByClassName("fa-angry")[0]
        .classList.remove("hide");
      break;
    case "fa fa-star icon":
      eo.target.classList.add("star");
      section.prepend(eo.target.parentElement);
      break;
    case "fa fa-star icon star":
      eo.target.classList.remove("star");
      section.append(eo.target.parentElement);
      break;
    case "task":
      eo.target.classList.add("active");
      eo.target.getElementsByClassName("textTask")[0].classList.remove("hide");
      break;
    case "task active":
      eo.target.classList.remove("active");
      eo.target.getElementsByClassName("textTask")[0].classList.add("hide");
      break;
    default:
      break;
  }
});

// let editBtn = `<button class="button">Edit <i class="fa fa-arrow-right"></i></button>`;
// eo.target.parentElement.parentElement.getElementsByClassName(
//   "newTask"
// )[0].innerHTML += editBtn;
// if(eo.target.className == "task"){
//     taskHead.value = eo.target.childElement.innerHTML;
// }
