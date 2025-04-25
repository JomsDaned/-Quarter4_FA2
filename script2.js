function generateTable() {

    const start = parseInt(document.getElementById("start").value);
    const end = parseInt(document.getElementById("end").value);
    const outputDiv = document.getElementById("tableOutput");
    

    if (isNaN(start) || isNaN(end) || start < 2 || end > 10 || start > end) {
        alert("Please enter numbers between 2 and 10");
        outputDiv.innerHTML = ""; 
        return;
    }


    let tableHTML = "<table>";
    for (let i = start; i <= end; i++) {
      tableHTML += "<tr>";
      for (let j = start; j <= end; j++) {
        tableHTML += `<td>${i * j}</td>`;
      }
      tableHTML += "</tr>";
    }
    tableHTML += "</table>";
  
    outputDiv.innerHTML = tableHTML;
  }
