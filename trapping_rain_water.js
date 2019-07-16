/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = left_max = right_max = result = 0;
    let right = height.length - 1;
    while(left < right) {
        if(height[left] < height[right]) {
            if(height[left] >= left_max) left_max = height[left];
            else result += left_max - height[left];
            left++;
        } else if(height[left] >= height[right]) {
            if(height[right] >= right_max) right_max = height[right];
            else result += right_max - height[right];
            right--;
        }
    }
    return result;
};