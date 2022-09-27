function solution(input: string[]) {
    const [a, b, c, d, e] = input.map(l => parseInt(l));
    console.log(
        [...new Array(Math.abs(b - a) + (a < 0 ? 1 : 0))]
            .map((_, i) => {
                const n = a + i;
                if (n < 0) {
                    return c;
                } else if (n === 0) {
                    return d;
                } else {
                    return e;
                }
            })
            .reduce((a, b) => a + b, 0),
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
