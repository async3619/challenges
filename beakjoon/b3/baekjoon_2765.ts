function solution(input: string[]) {
    const data = input.map(p => p.split(" ").map(n => parseFloat(n)));
    for (let i = 0; i < data.length; i++) {
        const [r, s, t] = data[i];
        if (s === 0) {
            continue;
        }

        const l = (3.1415927 * r * s) / 12 / 5280;
        console.log(`Trip #${i + 1}: ${l.toFixed(2)} ${((l / t) * 3600).toFixed(2)}`);
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
