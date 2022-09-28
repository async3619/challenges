function solution(input: string[]) {
    const items: string[][] = [];
    for (let i = 0; i < input.length; i++) {
        const count = parseInt(input[i]);
        items.push(input.slice(i + 1, i + 1 + count));

        i += count;
    }

    console.log(
        items
            .map(p => {
                const v = p
                    .map(BigInt)
                    .reduce((a, b) => a + b, BigInt(0))
                    .toString();

                if (v === "0") {
                    return "0";
                } else {
                    return v[0] === "-" ? "-" : "+";
                }
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
