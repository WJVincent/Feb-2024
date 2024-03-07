const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

let answer = {};

const askPowerLevel = () => {
    rl.question('what is your power level?', (input) => {
        // answer.power = input;
        if(+input === 9000){
            answer.power = 'next time on dragonball'
        } else {
            answer.power = input;
        }
        console.log(answer);
        rl.close();
    });
};

const askMessage = () => {
    rl.question('what is your message?', (input) => {
        answer.message = input;

        askPowerLevel();
    });
}

askMessage();

