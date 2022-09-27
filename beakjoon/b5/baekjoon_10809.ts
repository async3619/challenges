function solution([input]: string[]) {
    const a = "a".charCodeAt(0);
    const cnt = "z".charCodeAt(0) - a + 1;
    console.log(
        new Array(cnt)
            .fill(null)
            .map((i, n) => input.indexOf(String.fromCharCode(a + n)))
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
