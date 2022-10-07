function solution([, input]: string[]) {
    const n = input.split(" ").map(Number);
    const [min, max] = [Math.min(...n), Math.max(...n)];

    console.log(min * max);
}

solution((global?.process?.env?.arguments || require("fs").readFileSync("/dev/stdin").toString()).trim().split("\n"));
