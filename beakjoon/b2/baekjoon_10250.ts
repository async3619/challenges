function solution([, ...data]: string[]) {
    const items = data.map(p => p.split(" ").map(n => parseInt(n)));
    for (const [h, , n] of items) {
        const x = Math.ceil(n / h);
        let y = n % h;
        if (y === 0) {
            y = h;
        }

        console.log(y.toString() + x.toString().padStart(2, "0"));
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
