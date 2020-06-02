
function addRow(){
  const TableElements = document.getElementById("Table")
  let NewRow = document.createElement("tr")
  TableElements.appendChild(NewRow);
  NewRow.classList.add("row");
  let column=1;
  for(let i=0; i<column;i++){
      let cell = document.createElement("td");
      NewRow.appendChild(cell);
      cell.textContent = "O";
  }
}

function removeRow() {
  let row = document.getElementsByClassName("row");
  let tr = Array.from(row);
  tr[tr.length - 1].parentNode.removeChild(tr[tr.length - 1]);
}

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