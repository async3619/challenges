function solution([input]: string[]) {
    const n = parseInt(input);
    const y = (n - 1) * 2 + 1;
    for (let i = 0; i < y; i++) {
        console.log(
            new Array(n)
                .fill("*")
                .map((_, j) => {
                    if (n - Math.abs(n - (i + 1)) > j) {
                        return "*";
                    }

                    return null;
                })
                .filter(Boolean)
                .join(""),
        );
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
