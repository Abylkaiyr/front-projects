// Adding items to the DOM

let dropZoneElements = ["Black", "Grey", "Blue", "White"];
let dragItems = ["Көк", "Ақ", "Қара", "Сұр"];
let countCorrect = 0;

// Randomizing elements of an array
shuffleArray(dropZoneElements);
shuffleArray(dragItems);

// Adding elements of the array to the DOM
addDivItems(dropZoneElements, "dropZone", "dropZoneItem", "false");
addDivItems(dragItems, "dragItems", "dragItems", "true");

function addDivItems(array, elementID, className, attribute) {
  const element = document.getElementById(`${elementID}`);
  for (var i = 0; i < array.length; i++) {
    var div = document.createElement("div");
    div.textContent = array[i];
    div.classList.add(className);
    div.setAttribute("draggable", attribute);
    div.setAttribute("id", array[i]);
    element.appendChild(div);
  }
}

function shuffleArray(array) {
  var currentIndex = array.length;
  var temporaryValue, randomIndex;

  // While there are remaining elements to shuffle
  while (currentIndex !== 0) {
    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap the current element with a random element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Working with added elements
const dragItemsD = document.querySelectorAll(".dragItems");
const dropZonesD = document.querySelectorAll(".dropZoneItem");

dragItemsD.forEach((dragItem) => {
  dragItem.addEventListener("dragstart", handleDragstart);
  dragItem.addEventListener("dragend", handleDragend);
});

dropZonesD.forEach((dropZone) => {
  dropZone.addEventListener("dragenter", handleDragenter);
  dropZone.addEventListener("dragleave", handleDragleave);
  dropZone.addEventListener("dragover", handleDragover);
  dropZone.addEventListener("drop", handleDrop);
});

function handleDragstart(event) {
  event.dataTransfer.setData("id", this.id);
  this.classList.add("dragItem--active");
}

function handleDragend(event) {
  this.classList.remove("dragItem--active");
}

function handleDragenter(event) {
  event.preventDefault();
  this.classList.add("dropZone--active");
}

function handleDragleave(event) {
  this.classList.remove("dropZone--active");
}

function handleDragover(event) {
  event.preventDefault();
}

function handleDrop(event) {
  let color = event.dataTransfer.getData("id");
  matchElements(color, this.id);
  this.classList.remove("dropZone--active");
}

function matchElements(colorKaz, colorEng) {
  if (colorEng == "Black" && colorKaz == "Қара") {
    countCorrect++;
    const element = document.getElementById(`${colorEng}`);
    var div = document.createElement("div");
    div.textContent = colorKaz;
    element.appendChild(div);
    document.getElementById(`${colorKaz}`).style.display = "none";
  } else if (colorEng == "White" && colorKaz == "Ақ") {
    countCorrect++;
    const element = document.getElementById(`${colorEng}`);
    var div = document.createElement("div");
    div.textContent = colorKaz;
    element.appendChild(div);
    document.getElementById(`${colorKaz}`).style.display = "none";
  } else if (colorEng == "Blue" && colorKaz == "Көк") {
    countCorrect++;
    const element = document.getElementById(`${colorEng}`);
    var div = document.createElement("div");
    div.textContent = colorKaz;
    element.appendChild(div);
    document.getElementById(`${colorKaz}`).style.display = "none";
  } else if (colorEng == "Grey" && colorKaz == "Сұр") {
    countCorrect++;
    const element = document.getElementById(`${colorEng}`);
    var div = document.createElement("div");
    div.textContent = colorKaz;
    element.appendChild(div);
    document.getElementById(`${colorKaz}`).style.display = "none";
  } else {
    const element = document.getElementById(`${colorEng}`);
    var div = document.createElement("div");
    div.textContent = colorKaz;
    element.appendChild(div);
    document.getElementById(`${colorKaz}`).style.display = "none";
  }
}

function count() {
  const divElement = document.querySelector("#myDiv");
  if (!divElement) {
    const element = document.getElementById(`footer`);
    var div = document.createElement("div");
    div.setAttribute("id", "myDiv");
    div.textContent = countCorrect;
    element.appendChild(div);
    console.log("here1");
  }
}
