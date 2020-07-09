/**
 * leetcode上序号为53的题目：
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 */
function maxSubArray(nums) {
    let pre = 0;
    let maxAns = nums[0];
    for (let i = 0; i < nums.length; i++) {
        pre = Math.max(pre + nums[i], nums[i]);
        maxAns = Math.max(maxAns, pre);
    }
    return maxAns;
}

var nums = [1, 2, 5, -7, 8, -100, 4, -9, 5, 6];
console.log(maxSubArray(nums))
