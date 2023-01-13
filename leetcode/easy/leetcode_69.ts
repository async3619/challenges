function mySqrt(x: number): number {
    if (x === 1) {
        return 1;
    }

    let l = 0;
    let r = x;
    while (true) {
        const n = (l + r) / 2;
        const p = n * n;

        if (Math.floor(p) === x) {
            return Math.floor(n);
        }

        if (p > x) {
            r = n;
        } else {
            l = n;
        }
    }
}
