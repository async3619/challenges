function solution([, ...data]: string[]) {
    for (const line of data) {
        const items = line.trim().split("");
        let cnt = 0;
        let sum = 0;
        for (let i = 0; i < items.length; i++) {
            cnt = items[i] === "O" ? cnt + 1 : 0;
            sum += cnt;
        }

        console.log(sum);
    }
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
