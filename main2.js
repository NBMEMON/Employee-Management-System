import inquirer from "inquirer";
let employee_info = [];
let condition = true;
while (condition) {
    let employee_input = await inquirer.prompt([
        {
            message: "Enter Your Name",
            type: "input",
            name: "name",
        },
        {
            message: "Enter Your Employee ID",
            type: "input",
            name: "id",
        },
    ]);
    let salary_choice = await inquirer.prompt([
        {
            name: "salary",
            type: "input",
            message: "Enter Your Salary",
        },
        {
            name: "confirm",
            type: "confirm",
            message: "Do you want to enter another employee?",
            default: true,
        },
    ]);
    employee_info.push({
        name: employee_input.name,
        id: employee_input.id,
        salary: salary_choice.salary,
    });
    console.log("Current list of employees:", employee_info);
    condition = salary_choice.confirm;
    if (!condition) {
        let edit_choice = await inquirer.prompt({
            name: "edit",
            type: "list",
            choices: ["Yes", "No"],
            message: "Do you want to make any changes?",
            default: "Yes",
        });
        if (edit_choice.edit === "Yes") {
            let select = await inquirer.prompt({
                name: "action",
                type: "list",
                choices: ["Remove Employee", "View List of Employees"],
                message: "Select Your Choice",
            });
            if (select.action === "View List of Employees") {
                console.log("Current list of employees:", employee_info);
            }
            else if (select.action === "Remove Employee") {
                let remove = await inquirer.prompt({
                    name: "remove_id",
                    type: "input",
                    message: "Enter the id of the employee you want to remove",
                });
                employee_info = employee_info.filter(emp => emp.id !== remove.remove_id);
                console.log("Updated list of employees:", employee_info);
            }
        }
    }
}
console.log("Final list of employees:", employee_info);
