let columns = 1;
function addRows(){
  let table = document.getElementById("Table");
  let tableRow = document.createElement("tr");
  tableRow.classList.add("row");
  table.appendChild(tableRow);
  for (let i = 0; i < columns; i++) {
    let tableCell = document.createElement("td");
    tableRow.appendChild(tableCell);
  }
}
function addColumns(){
  columns++;
  let rows = document.getElementsByClassName("row");
  tr = [...rows];
  for (let i = 0; i < tr.length; i++) {
    let tableCell = document.createElement("td");
    tr[i].appendChild(tableCell);
  }
}
//allows the user to remove 
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
let selectedColor = "blue";""