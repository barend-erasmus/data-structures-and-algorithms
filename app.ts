import * as childProcess from 'child_process';
import * as readline from 'readline';

function ask(readlineInterface: any, str: string): Promise<string> {
    return new Promise((resolve, reject) => {
        readlineInterface.question(str, (answer: string) => {
            resolve(answer);
        });
    });
}

async function run() {
    const readlineInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const programs: {} = {
        'checking-validity-of-an-expression-containing-nested-parentheses': 'Checking validity of an expression containing nested parentheses',
        'double-linked-list': 'Double Linked List',
        'euclids-algorithm-to-find-gcd': 'Euclid\'s algorithm to find GCD',
        'factorial': 'Factorial',
        'fibonacci-series': 'Fibonacci Series',
        'find-nth-power': 'Find nth power',
        'print-a-decimal-number-in-binary-form': 'Print a decimal number in binary form',
        'single-linked-list': 'Single Linked List',
        'tower-of-hanoi': 'Tower of Hanoi',
    };

    const programIndexStr: string = await ask(readlineInterface, `Select a program: \r\n\r\n${Object.keys(programs).map((key, i) => `(${i + 1}) - ${programs[key]}`).join('\r\n')}\r\n`);

    const programKey: string = Object.keys(programs)[parseInt(programIndexStr, undefined) - 1];

    console.log(`\r\n`);

    const p = childProcess.fork(`./${programKey}/src/app.js`);

    readlineInterface.close();
}

run();
