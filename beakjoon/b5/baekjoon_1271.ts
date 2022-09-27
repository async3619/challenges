function solution([input]: string[]) {
    const [a, b] = input.split(" ").map(i => parseInt(i));
    const perPerson = Math.floor(a / b);

    console.log(perPerson);
    console.log(a - (b * perPerson));
}

(callback => {
    if (typeof process !== "undefined" && "env" in process && "arguments" in process.env && process.env.arguments) {
        solution(process.env.arguments.split("\n"));
        return;
    }

    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const input: string[] = [];
    rl.on("line", line => {
        input.push(line);
    }).on("close", function () {
        callback(input);
        process.exit();
    });
})(solution);
