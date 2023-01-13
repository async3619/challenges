function plusOne(digits: number[]): number[] {
    digits[digits.length - 1]++;

    for (let i = digits.length - 1; i >= 0; --i) {
        if (digits[i] >= 10) {
            digits[i] = digits[i] - 10;

            if (i === 0) {
                digits.unshift(1);
            } else {
                digits[i - 1] += 1;
            }
        }
    }

    return digits;
}
