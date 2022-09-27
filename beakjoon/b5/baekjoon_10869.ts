function solution([input]: string[]) {
    const [A, B] = input.split(" ").map(i => parseInt(i));
    console.log(`${A + B}
${A - B}
${A * B}
${Math.floor(A / B)}
${A % B}`);
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
