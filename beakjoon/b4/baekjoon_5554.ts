function solution(input: string[]) {
    const sum = input.map(l => parseInt(l)).reduce((a, b) => a + b, 0);
    const m = Math.floor(sum / 60);
    console.log(`${m}
${sum % (m * 60)}`);
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
