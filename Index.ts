import inquirer from "inquirer";
import chalk from "chalk";

const answer: {
    firstNumber: number,
    secondNumber: number,
    operator: string,
} = await inquirer.prompt([
    {
        type: "number",
        name: "firstNumber",
        message: (chalk.green("Enter first number"))
    },
    {
        type: "number",
        name: "secondNumber",
        message: (chalk.yellowBright("Enter second number"))
    },
    {
        type: "list",
        name: "operator",
        message: (chalk.cyan("Select operator")),
        choices: ["+", "-", "*", "/"]
    }
]);

const {firstNumber, secondNumber, operator} = answer;

let result
switch (operator) {
    case "+":
        // console.log(answer.firstNumber + answer.secondNumber);
        result = answer.firstNumber + answer.secondNumber;
        break;
    case "-":
        console.log(answer.firstNumber - answer.secondNumber);
        result = answer.firstNumber - answer.secondNumber;
        break;
    case "*":
        // console.log(answer.firstNumber * answer.secondNumber);
        result = answer.firstNumber * answer.secondNumber;
        break;
    case "/":
        // console.log(answer.firstNumber / answer.secondNumber);
        result = answer.firstNumber / answer.secondNumber;
        break;
    default:
        console.log("Select A Valid Operator");
        break;
};
console.log(chalk.red(`${firstNumber} ${operator} ${secondNumber} = ${result}`));

