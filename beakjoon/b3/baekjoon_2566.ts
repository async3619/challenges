function solution(input: string[]) {
    const table = input.map(p => p.split(" ").map(n => parseInt(n)));
    let max = 0;
    let pos = [0, 0];
    for (let y = 0; y < table.length; y++) {
        for (let x = 0; x < table[y].length; x++) {
            if (max < table[y][x]) {
                max = table[y][x];
                pos = [y + 1, x + 1];
            }
        }
    }

    console.log(max);
    console.log(pos.join(" "));
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
