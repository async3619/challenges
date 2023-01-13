function searchInsert(nums: number[], target: number): number {
    let lastIndex = -1;
    for (let i = 0; i < nums.length; i++) {
        const v = nums[i];
        if (v === target) {
            return i;
        }

        if (nums[i] < target) {
            lastIndex = i;
        }
    }

    return lastIndex + 1;
}
