   let column = 1;

   function addRow(){
     const TableElements = document.getElementById("Table")
     let NewRow = document.createElement("tr")
     NewRow.classList.add("row");
     TableElements.appendChild(NewRow);
 
     for(let i=0; i<column;i++){
         let cell = document.createElement("td");
         NewRow.appendChild(cell);
         cell.textContent = "O";
     }
   }

 function addColumn() {
   column++;
   let row = document.getElementsByClassName("row");
   let tr = Array.from(row);
   for (let i = 0; i < tr.length; i++) {
       let cell = document.createElement("td");
       cell.classList.add("cell");
       allowChangeColor(cell);
       tr[i].appendChild(cell);
   }
 }
