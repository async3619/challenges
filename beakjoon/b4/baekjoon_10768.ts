function solution(input: string[]) {
    console.log(
        (() => {
            const [m, d] = input.map(i => parseInt(i));
            if (m <= 1) {
                return "Before";
            } else if (m === 2) {
                if (d === 18) {
                    return "Special";
                } else {
                    return d > 18 ? "After" : "Before";
                }
            } else {
                return "After";
            }
        })(),
    );
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
