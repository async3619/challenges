function increasingTriplet(nums: number[]): boolean {
    let _1 = Number.MAX_VALUE;
    let _2 = Number.MAX_VALUE;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] > _2) {
            return true;
        } else if (nums[i] < _1) {
            _1 = nums[i];
        } else if (nums[i] > _1 && nums[i] < _2) {
            _2 = nums[i];
        }
    }

    return false;
}
