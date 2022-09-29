function solution(input: string[]) {
    const v = input.map((n, i) => (n.indexOf("FBI") >= 0 ? i + 1 : null)).filter(Boolean);

    if (!v.length) {
        console.log("HE GOT AWAY!");
    } else {
        console.log(v.join(" "));
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
