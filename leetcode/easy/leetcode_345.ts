function reverseVowels(str: string): string {
    const vowelMap = { a: true, e: true, i: true, o: true, u: true };
    const s = str.split("");
    let j = s.length - 1;
    for (let i = 0; i < s.length; i++) {
        const ch = s[i].toLowerCase();
        if (!vowelMap[ch]) {
            continue;
        }

        if (i >= j) {
            break;
        }

        while (true) {
            if (j <= 0) {
                break;
            }

            const rch = s[j].toLowerCase();

            if (!vowelMap[rch]) {
                --j;
                continue;
            }

            const temp = s[i];
            s[i] = s[j];
            s[j] = temp;
            --j;
            break;
        }
    }

    return s.join("");
}
