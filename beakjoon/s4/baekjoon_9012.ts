function solution([, ...rest]: string[]) {
    for (let i = 0; i < rest.length; i++) {
        const tokens = rest[i].split("");
        let broken = false;
        let level = 0;
        while (tokens.length > 0) {
            const isOpen = tokens.shift() === "(";
            if (isOpen) {
                ++level;
            } else {
                if (!level) {
                    broken = true;
                    break;
                }

                --level;
            }
        }

        if (level > 0) {
            broken = true;
        }

        if (broken) {
            console.log("NO");
        } else {
            console.log("YES");
        }
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
