#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Define quiz questions
let questions = [
    {
        question: 'What is the capital of Pakistan?',
        options: ['Islamabad', 'Lahore', 'Karachi', 'Mirpur'],
        correctAnswer: 'Islamabad'
    },
    {
        question: 'Typescript language is a superset of ?',
        options: ['Css', 'Html', 'Phython', 'Javascript'],
        correctAnswer: 'Javascript'
    },
    {
        question: 'Which data types is commonly used for true or false ?',
        options: ['Boolean', 'String', 'Any', 'Number'],
        correctAnswer: 'Boolean'
    }
    // Add more questions here...
];
// Function to start the quiz
async function startQuiz() {
    let score = 0;
    console.log(chalk.green.bold('Welcome to the Quiz!\n'));
    for (let { question, options, correctAnswer } of questions) {
        let { answer } = await inquirer.prompt({
            type: 'list',
            name: 'answer',
            message: question,
            choices: options
        });
        if (answer === correctAnswer) {
            console.log(chalk.bold.greenBright('Correct!'));
            score++;
        }
        else {
            console.log(`Incorrect! The correct answer is ${correctAnswer}.`);
        }
    }
    console.log(`\nQuiz completed! Your score: ${score}/${questions.length}`);
}
// Start the quiz
startQuiz();
