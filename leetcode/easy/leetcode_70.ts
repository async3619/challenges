const cache: Record<number, number> = {};

function climbStairs(n: number): number {
    if (n === 0 || n === 1 || n === 2) {
        return n;
    }

    if (cache[n]) {
        return cache[n];
    }

    const val = climbStairs(n - 2) + climbStairs(n - 1);
    cache[n] = val;

    return val;
}
