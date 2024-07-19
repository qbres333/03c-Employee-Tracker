// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  // create an empty array for employees
  const employeesArray = [];
  
  //add variable for while loop
  let createEmployees = true;
   
  // create an empty employee object (for each employee added)  
  function getEmployeeInfo() {  
      
    const firstName = prompt('What is your first name?');

    //if user cancels, close the pop-up window
    if(!firstName) {
      return;
    }

    const lastName = prompt('What is your last name?');
    //if user cancels, close the pop-up window
    if(!lastName) {
      return;
    }

    const salary = prompt('What is your salary?');
    //if user cancels, close the pop-up window
    if(!salary) {
      return;
    }
    
    while(isNaN(Number(salary))) {
      salary = prompt('Please enter a valid number (no commas)');
    }
   
    const employee = {
      firstName,
      lastName,
      salary
    };

    employeesArray.push(employee);

  }

  // ask user if they want to create more employees
  while(createEmployees) {
    getEmployeeInfo();
    addMoreEmps = confirm('Would you like to add another employee?');
    
    if(!addMoreEmps) {
      return;
    }
  }
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let sum = 0;
  const average = 0;

  for (let i = 0; i < employeesArray.salary.length; i++) {
    sum = sum + employeesArray.salary[i];
    
  }
  average = sum/employeesArray.salary.length;
  return average;

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  return employeesArray[randomIndex];

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
