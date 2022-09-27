function solution([input]: string[]) {
    const token = ":fan:";
    console.log(
        [
            [token, token, token],
            [token, `:${input}:`, token],
            [token, token, token],
        ]
            .map(i => i.join(""))
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
