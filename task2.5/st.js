



var table = document.createElement("table");
table.classList.add("table");
var headerRow = document.createElement("tr");
var firstHeaderCell = document.createElement("th");
firstHeaderCell.textContent = "First";
headerRow.appendChild(firstHeaderCell);
var secondHeaderCell = document.createElement("th");
secondHeaderCell.textContent = "Last";
headerRow.appendChild(secondHeaderCell);
var thirdHeaderCell = document.createElement("th");
thirdHeaderCell.textContent = "Handle";
headerRow.appendChild(thirdHeaderCell);
table.appendChild(headerRow);
var tableBody = document.createElement("tbody");
var firstTableRow = document.createElement("tr");
var firstTableCell = document.createElement("td");
firstTableCell.textContent = "Mark";
firstTableRow.appendChild(firstTableCell);
var secondTableCell = document.createElement("td");
secondTableCell.textContent = "Otto";
firstTableRow.appendChild(secondTableCell);
var thirdTableCell = document.createElement("td");
thirdTableCell.textContent = "@mdo";
firstTableRow.appendChild(thirdTableCell);
tableBody.appendChild(firstTableRow);
var secondTableRow = document.createElement("tr");
var firstTableCell = document.createElement("td");
firstTableCell.textContent = "Jacob";
secondTableRow.appendChild(firstTableCell);
var secondTableCell = document.createElement("td");
secondTableCell.textContent = "Thornton";
secondTableRow.appendChild(secondTableCell);
var thirdTableCell = document.createElement("td");
thirdTableCell.textContent = "@fat";
secondTableRow.appendChild(thirdTableCell);
tableBody.appendChild(secondTableRow);


table.appendChild(tableBody);
document.body.appendChild(table);





