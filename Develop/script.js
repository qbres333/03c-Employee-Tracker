// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  // create an empty array for employees
  const employeesArray = [];

  // create an empty employee object (for each employee added)  
  const employeeData = {
    firstName: '',
    lastName: '',
    salary: 0
  };

  //array of invalid names (optional)
  const invalidNames = [null, undefined, ' '];

  //add variable for while loop
  let createEmployees = true;
 

  // while loop for adding employees
  while(createEmployees) {
    //enter employee's first name
    const firstName = window.prompt("Enter the employee's first name:");

    // If user presses Cancel, end function
    if(!firstName) {
      return;
    }

    // if user enters an invalid name from the related array
    if(invalidNames.includes(firstName)) {
      window.alert("Please enter a valid first name.");
    }

    // if name is valid, assign it to the object property firstName
    else {
      employeeData.firstName = firstName;
      //we can set the property value, but how to we get the value to show in the table?


      // enter employee's last name
      const lastName = window.prompt("Enter the employee's last name:");

      // If user presses Cancel, end function
      if(!lastName) {
      return;
      }

      // if user enters an invalid name from the related array
      if(invalidNames.includes(lastName)) {
        window.alert("Please enter a valid last name.");      
      }

      // if name is valid, assign it to the object property lastName
      else {
        employeeData.lastName = lastName;

        // enter employee's salary
        const salary = window.prompt("Enter the employee's salary (no commas):");

        // If user presses Cancel, end function
        if(!salary) {
          return;
        }

        // if user enters an invalid data type or has invalid values from array
        if(typeof Number(salary) !== "number" || invalidNames.includes(salary)) {
          window.alert("Please enter a numeric value.");           
        }
        // if salary is valid, assign it to the object property salary
        else {
          employeeData.salary = salary;

          // Ask user if they want to create more employees
          // createEmployees = window.confirm("Would you like to add more employees?");
        }
        
      }

      employeesArray.push(employeeData);
    

      // Ask user if they want to create more employees
      createEmployees = window.confirm("Would you like to add more employees?");
      if(!createEmployees) {
        displayEmployees();
      }

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
    average = sum/employeesArray.salary.length;
  }
  return average;

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
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
