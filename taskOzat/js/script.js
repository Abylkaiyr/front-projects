let draggableListItems = document.querySelectorAll(".draggable-list li");
const endMessage = document.getElementById("endMessage");

let selectedId;
let dropTargetId;
let matchingCounter = 0;

addEventListeners();


function dragStart() {
  selectedId = this.id;
}

function dragEnter() {
  this.classList.add("over");
}

function dragLeave() {
  this.classList.remove("over");
}

function dragOver(ev) {
  ev.preventDefault();
}

function dragDrop() {
  dropTargetId = this.id;

  if (checkForMatch(selectedId, dropTargetId)) {
    document.getElementById("matchMessage").style.display = "flex";
    setTimeout(AnimateCorrect, 200);
    document.getElementById(selectedId).style.display = "none";
    document.getElementById(dropTargetId).style.display = "none";
    matchingCounter++;
  } else if (checkForMatch2(selectedId, dropTargetId)) {
    document.getElementById("matchMessage").style.display = "flex";
    setTimeout(AnimateCorrect, 200);
    document.getElementById(selectedId).style.display = "none";
    document.getElementById(dropTargetId).style.display = "none";
    matchingCounter++;
  } else {
    document.getElementById("notmatchMessage").style.display = "flex";
    setTimeout(AnimateInCorrect, 200);
  }

  if (matchingCounter === 5) {
    endMessage.style.display = "block";
  }
  this.classList.remove("over");
}

function AnimateCorrect() {
  document.getElementById("matchMessage").style.display = "none";
}

function AnimateInCorrect() {
  document.getElementById("notmatchMessage").style.display = "none";
}

function checkForMatch(selected, dropTarget) {
  switch (selected) {
    case "e1":
      return dropTarget === "s1" ? true : false;

    case "e2":
      return dropTarget === "s2" ? true : false;

    case "e3":
      return dropTarget === "s3" ? true : false;

    case "e4":
      return dropTarget === "s4" ? true : false;

    case "e5":
      return dropTarget === "s5" ? true : false;

    default:
      return false;
  }
}

function checkForMatch2(selected, dropTarget) {
  switch (selected) {
    case "s1":
      return dropTarget === "e1" ? true : false;

    case "s2":
      return dropTarget === "e2" ? true : false;

    case "s3":
      return dropTarget === "e3" ? true : false;

    case "s4":
      return dropTarget === "e4" ? true : false;

    case "s5":
      return dropTarget === "e5" ? true : false;

    default:
      return false;
  }
}

function playAgain() {
  matchingCounter = 0;
  endMessage.style.display = "none";
  const ul = document.getElementById("spa-dl");
  const ul1 = document.getElementById("eng-dl");
  randomizeList(ul);
  randomizeList(ul1);
  draggableListItems.forEach((item) => {
    document.getElementById(item.id).style.display = "block";
  });
}

function randomizeList(ul) {
  const listItems = Array.from(ul.getElementsByTagName("li"));
  for (let i = listItems.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [listItems[i], listItems[j]] = [listItems[j], listItems[i]];
  }
  ul.innerHTML = "";
  listItems.forEach((item) => ul.appendChild(item));
}

function addEventListeners() {
  draggableListItems.forEach((item) => {
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("drop", dragDrop);
    item.addEventListener("dragover", dragOver);
    item.addEventListener("dragleave", dragLeave);
  });
}
