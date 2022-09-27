function solution(p: string[]) {
    const [x, y] = p.map(l => parseInt(l));

    console.log(
        (() => {
            if (x > 0 && y > 0) {
                return 1;
            } else if (x < 0 && y > 0) {
                return 2;
            } else if (x < 0 && y < 0) {
                return 3;
            } else {
                return 4;
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
