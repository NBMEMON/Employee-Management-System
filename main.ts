import inquirer from "inquirer";
let employee_info1 : string [] = [];

// let employee_id =[];
// let employee_salary = [];
let condition = true;
while (condition) {
  let employee_input = await inquirer.prompt([
    {
      message: "Enter Your Name",
      type: "input",
      name: "first_question",
    },
    {
      message: "Enter Your Employee ID",
      type: "input",
      name: "second_question",
    },
  ]);
  let salary_choice = await inquirer.prompt([
    {
      name: "third_question",
      type: "input",
      message: "Enter Your Salary",
    },
    {
      name: "fourth_question",
      type: "confirm",
      choice: ["yes", "No"],
      default: true,
    },
  ]);
  let edit_choice = await inquirer.prompt({
    name: "choices",
    type: "list",
    choices: ["Yes", "No"],
    message: "Do you want any changes ?",
    default: "Yes",
  });
  employee_info1.push(
    " name:" + employee_input.first_question,
    "id:" + employee_input.second_question,
    "Employee Salary :" + salary_choice.third_question
  );

  console.log(`${employee_info1}`);
  condition = salary_choice.fourth_question;
  if (employee_input.second_question == "No") {
    console.log(`${employee_info1}`);
  }
  if (edit_choice.choices === "Yes") {
    let select = await inquirer.prompt({
      name: "select2",
      type: "list",
      choices: ["Remove Employee", "View List of Employees"],
      message: "Select Your Choice",
    });
    if (select.select2 === "View List of Employees") {
      console.log("Current list of employees:", employee_info1);
    }
    else if (select.select2 === "Remove User"){
      console.log(`The list of current employee is given below \n${employee_info1}`)
    }
  }
}
