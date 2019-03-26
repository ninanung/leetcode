// https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length -1;
    let max = 0;
    while(right - left > 0) {
        if(height[left] < height[right]) {
            max = (right - left) *  height[left] > max ? (right - left) *  height[left] : max
            left++;
        } else {
            max = (right - left) *  height[right] > max ? (right - left) *  height[right] : max
            right--;
        }
    }
    return max;
};