function reverseWords(s: string): string {
    const words = s.split(" ");
    for (let i = 0, j = words.length - 1; i < words.length && i < j; i++, j--) {
        const word = words[i];
        const rword = words[j];
        if (!word || !rword) {
            if (!word && rword) ++i;
            else if (!rword && word) --j;

            continue;
        }

        words[j] = word;
        words[i] = rword;
    }

    return words.filter(s => !!s).join(" ");
}
