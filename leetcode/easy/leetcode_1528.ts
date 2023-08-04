function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let greatest = 0; // = Math.max(...candies);
    for (let i = 0; i < candies.length; ++i) {
        greatest = Math.max(candies[i], greatest);
    }

    const result: boolean[] = [];
    for (let i = 0; i < candies.length; ++i) {
        result[i] = greatest <= candies[i] + extraCandies;
    }

    return result;
}
