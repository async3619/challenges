function findMaxAverage(nums: number[], windowSize: number): number {
    let average: number | null = null;
    let sum: number | null = null;
    for (let i = 0, j = nums.length - windowSize; i <= j; ++i) {
        if (sum === null) {
            sum = 0;
            for (let k = i; k < i + windowSize; ++k) {
                sum += nums[k];
            }
        } else {
            sum += nums[i + windowSize - 1] - nums[i - 1];
        }

        const currentAverage = sum / windowSize;
        if (average === null) {
            average = currentAverage;
        } else {
            average = Math.max(currentAverage, average);
        }
    }

    return average;
}
