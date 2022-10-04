const count = (x: number, y: number, map: string[], board: string[]) => {
    let count = 0;
    for (let i = y; i < y + 8; i++) {
        for (let j = x; j < x + 8; j++) {
            if (map[i][j] !== board[i - y][j - x]) count++;
        }
    }

    return count;
};

function solution([size, ...data]: string[]) {
    const [h, w] = size.split(" ").map(p => parseInt(p));
    const white = ["WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW"];
    const black = ["BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB"];
    const counts = [];

    for (let y = 0; y < h - 7; y++) {
        for (let x = 0; x < w - 7; x++) {
            counts.push(count(x, y, data, white), count(x, y, data, black));
        }
    }

    console.log(Math.min(...counts));
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
