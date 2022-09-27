function solution(input: string[]) {
    const e = ["a", "e", "i", "o", "u"];
    console.log(
        input
            .filter(l => l !== "#")
            .map(
                l =>
                    l
                        .toLowerCase()
                        .split("")
                        .filter(c => e.includes(c)).length,
            )
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
