function solution([, ...input]: string[]) {
    const items = [25, 10, 5, 1];
    input
        .map(p => parseInt(p))
        .forEach(n => {
            const d = [];
            for (let i = 0; i < items.length; i++) {
                const c = Math.floor(n / items[i]);
                n = n % items[i];

                d.push(c);
            }

            console.log(d.join(" "));
        });
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
