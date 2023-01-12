function romanToInt(s: string): number {
    let sum = 0;
    const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        const currentValue = map[ch];
        const nextValue = map[s[i + 1]] || 0;
        if (currentValue < nextValue) {
            sum += nextValue - currentValue;
            ++i;
            continue;
        }

        sum += currentValue;
    }

    return sum;
}
