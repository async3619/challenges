function solution([input, data]: string[]) {
    const [ppm, room] = input.split(" ").map(i => parseInt(i));
    console.log(
        data
            .split(" ")
            .map(i => parseInt(i))
            .map(n => n - room * ppm)
            .join(" "),
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
