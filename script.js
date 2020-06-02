let columns = 1;
//adds a row to table when the user clicks on add row button.
function addRows(){
  let table = document.getElementById("Table");
  let tableRow = document.createElement("tr");
  tableRow.classList.add("row");
  table.appendChild(tableRow);
  for (let i = 0; i < columns; i++) {
    let tableCell = document.createElement("td");
    colorChange(tableCell);
    tableRow.appendChild(tableCell);
  }
}
//allows the user to add a column when the user clicks the add Column button
function addColumns(){
  columns++;
  let rows = document.getElementsByClassName("row");
  tr = [...rows];
  for (let i = 0; i < tr.length; i++) {
    let tableCell = document.createElement("td");
    colorChange(tableCell);
    tr[i].appendChild(tableCell);
  }
}
//allows the user to remove the row with the remove row button
function removeRow(){
  let rows = document.getElementsByClassName("row");
  tr = [...rows];
  if (tr.length == 0) {
    return;
  }
  tr[tr.length - 1].parentNode.removeChild(tr[tr.length - 1]);
  if (tr.length == 1) {
    columns = 1;
  }
}
//allows the user to remove a column when the remove column button is pressed.
function removeColumn(){
  if (columns == 1) {
    return;
  }
  columns--;
  let rows = document.getElementsByClassName("row");
  tr = [...rows];
  for (let i = 0; i < tr.length; i++) {
    tr[i].removeChild(tr[i].lastChild);
  }
}
let selectedColor = "blue";
const selectColor = (color) => {
  selectedColor = color;
};

let isColored = false;
function colorChange(tableCell) {
  tableCell.classList.add("notColored");
  tableCell.addEventListener("click", changeColor);
  tableCell.addEventListener("mousedown", (e) => {
    isColored = true;
  });
  tableCell.addEventListener("mousemove", (e) => {
    if (isColored) {
      tableCell.style.backgroundColor = selectedColor;
    }
  });
  tableCell.addEventListener("mouseup", (e) => {
    if (isColored) {
      isColored = false;
    }
  });
}
function changeColor() {
  this.style.backgroundColor = selectedColor;
  this.classList.remove("notColored");

}
//fills uncolored cells
function fillUncolored() {
  let tableCells = document.getElementsByTagName("td");
  let collectionOfCells = [...tableCells];
  let uncoloredtableCells = collectionOfCells.filter((tableCell) => {
    return tableCell.classList.contains("notColored");
  });
  uncoloredtableCells.forEach((tableCell) => {
    tableCell.style.backgroundColor = selectedColor;
    tableCell.classList.remove("notColored");
  });
}
//fill up all cells with selected color
function fillAll() {
  let tableCells = document.getElementsByTagName("td");
  let collectionOfCells = [...tableCells];
  collectionOfCells.forEach((tableCell) => {
    tableCell.style.backgroundColor = selectedColor;
    tableCell.classList.remove("notColored");
  });
}
//cleared up all cells of selected color
function clearAll() {
    let tableCells = document.getElementsByTagName("td");
    let collectionOfCells = [...tableCells];
    collectionOfCells.forEach((tableCell) => {
      tableCell.style.backgroundColor = "beige";
      tableCell.classList.add("notColored");
    });
  }


