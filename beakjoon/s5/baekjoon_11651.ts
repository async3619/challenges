function solution([, ...data]: string[]) {
    console.log(
        data
            .map(p => p.trim().split(" ").map(Number))
            .sort(([ax, ay], [bx, by]) => {
                if (ay == by) {
                    return ax < bx ? -1 : ax > bx ? 1 : 0;
                } else {
                    return ay < by ? -1 : 1;
                }
            })
            .map(p => p.join(" "))
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
