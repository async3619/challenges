function solution(input: string[]) {
    const w = [4, 2, ...new Array(8).fill(3)];
    console.log(
        input
            .slice(0, input.length - 1)
            .map(p => {
                const wi = p.split("").map(l => w[l]);
                return wi.reduce((a, b) => a + b, 0) + (wi.length + 1);
            })
            .join("\n"),
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
