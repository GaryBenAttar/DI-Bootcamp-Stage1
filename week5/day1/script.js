// Exercise 1
// Create a structured HTML file, and add the code below in the body.

// In a JS file, write a JavaScript function to add rows to a table. Use the code below as a base

// <table id="sampleTable" border="1">
// <tr>
//     <td>Row1 cell1</td>
//     <td>Row1 cell2</td>
// </tr>
// <tr>
//     <td>Row2 cell1</td>
//     <td>Row2 cell2</td>
// </tr>
// </table>

// <input type="button" onclick="insertRow()" value="Insert row">

const insertRow = function () {
  let rowCache = document.getElementsByTagName("tr");
  rowCache.insertAdjacentHTML(
    "afterend",
    "<tr><td>New Row cell1</td><td>New Row cell2</td></tr>"
  );
};
