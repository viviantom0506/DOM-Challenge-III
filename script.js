

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