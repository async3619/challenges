function productExceptSelf(nums: number[]): number[] {
    let product = 1;
    const result: number[] = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        result[i] = product;
        product *= nums[i];
    }

    product = 1;
    for (let i = nums.length - 1; i >= 0; --i) {
        result[i] *= product;
        product *= nums[i];
    }

    return result;
}
