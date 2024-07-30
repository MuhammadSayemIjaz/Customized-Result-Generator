
const tableBody = document.getElementById("tableBody");
var subjects = document.getElementsByClassName("subject");
var totalMarks = document.getElementsByClassName("totalMarks");
var obtainedMarks = document.getElementsByClassName("obtainedMarks");
var percentage = document.getElementsByClassName("percentage");
var grade = document.getElementsByClassName("grade")

let rows = [{ id: 0, subject: '', totalMarks: 0, obtainedMarks: 0, percentage: 0, grade: '' }];

function calculateGrade(percentage) {
     if (percentage >= 80) {
          return "A+";
     } else if (percentage >= 70) {
          return "A";
     } else if (percentage >= 60) {
          return "B";
     } else if (percentage >= 50) {
          return "C";
     } else if (percentage >= 40) {
          return "D";
     } else {
          return "F";
     }

}
function GenerateResult() {
     for (let i = 0; i < subjects.length; i++) {
          console.log("Subject => ", subjects[i].value);
          console.log("Total Marks =>", totalMarks[i].value);
          console.log("Obtained Marks =>", obtainedMarks[i].value);
          var per = (obtainedMarks[i].value / totalMarks[i].value) * 100;
          var gra = calculateGrade(per);
          percentage[i].innerHTML = per.toFixed(2) + " %";
          grade[i].innerHTML = gra;
     }
}

function generateRows() {
     for (let i = 0; i < rows.length; i++) {
          const tr = document.createElement("tr");
          tr.classList.add("bg-white", "border-b", "dark:bg-gray-800", "dark:border-gray-700", "hover:bg-gray-50", "dark:hover:bg-gray-600");
          tr.innerHTML = `<th scope="row"
                                   
                                   class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                                   <input type="text"
                                        value="${rows[i].subject}"
                                        class="subject bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Enter Subject Name" />
                              </th>
                              <td class="px-6 py-4">
                                   <input type="number"
                                        value="${rows[i].totalMarks}"
                                        class="totalMarks bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Enter Total Marks" />
                              </td>
                              <td class="px-6 py-4">
                                   <input type="number"
                                        value="${rows[i].obtainedMarks}"
                                        class="obtainedMarks bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Enter Obtained Marks" />
                              </td>
                              <td class="percentage px-6 py-4 text-center">
                                  ${rows[i].percentage}
                              </td>
                              <td class="grade px-6 py-4 text-center">
                              ${rows[i].grade}
                              </td>
                              <td class="px-6 py-4 text-center">
                                   <button onclick="addRow(${i})"
                                   class="text-blue-500 transition-all duration-1000 hover:text-white border border-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[13px] text-lg w-full sm:w-auto px-5 py-2.5 text-center ">
                                   + </button>
                                   <button onclick="deleteRow(${i})"
                                   class="text-red-800 transition-all duration-1000 hover:text-white border border-red-500 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-[13px] text-lg w-full sm:w-auto px-5 py-2.5 text-center ">
                                   <ion-icon name="trash"></ion-icon> </button>
                              </td>`;
          tableBody.appendChild(tr);
     }
}

function addRow(index) {
     const newRow = {
          id: rows.length,
          subject: '',
          totalMarks: 0,
          obtainedMarks: 0,
          percentage: 0,
          grade: ''
     }
     setPreviousValues();
     rows.splice(index + 1, 0, newRow);
     console.log(rows);
     tableBody.innerHTML = "";
     generateRows();

}
function deleteRow(index) {
     setPreviousValues();
     rows.splice(index , 1);
     tableBody.innerHTML = "";
     generateRows();

}


function setPreviousValues() {
     for (let i = 0; i < rows.length; i++) {
          rows[i].subject = subjects[i].value + '';
          rows[i].totalMarks = totalMarks[i].value + '';
          rows[i].obtainedMarks = obtainedMarks[i].value + '';
          rows[i].percentage = percentage[i].innerText + '';
          rows[i].grade = grade[i].innerText + '';
     }
}
generateRows()


function resetTable() {
     rows = [{ id: 0, subject: '', totalMarks: 0, obtainedMarks: 0, percentage: 0, grade: '' }];
     tableBody.innerHTML = "";
     generateRows();
}