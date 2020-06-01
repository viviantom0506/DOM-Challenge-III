
//function to add rows
function addRow(){
  const TableElements = document.getElementById("Table")
  let NewRow = document.createElement("tr")
  TableElements.appendChild(NewRow);
  let column=1;
  for(let i=0; i<column;i++){
      let cell = document.createElement("td");
      NewRow.appendChild(cell);
      cell.textContent = "O";
  }
}