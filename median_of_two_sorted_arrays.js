/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const fullLength = nums1.length + nums2.length;
    let point1 = 0;
    let point2 = 0;
    let result = 0;
    for(let i = 0; i < fullLength; i++) {
        if(fullLength % 2) {
            if(i === parseInt(fullLength / 2)) {
                if(typeof nums1[point1] === 'undefined') result += nums2[point2];
                else if(typeof nums2[point2] === 'undefined') result += nums1[point1];
                else result = nums1[point1] > nums2[point2] ? nums2[point2] : nums1[point1]
                return result;
            }
        } else {
            if(i === fullLength / 2 - 1) {
                if(typeof nums1[point1] === 'undefined') result += nums2[point2];
                else if(typeof nums2[point2] === 'undefined') result += nums1[point1];
                else result += nums1[point1] > nums2[point2] ? nums2[point2] : nums1[point1]
            }
            if(i === fullLength / 2) {
                if(typeof nums1[point1] === 'undefined') result += nums2[point2];
                else if(typeof nums2[point2] === 'undefined') result += nums1[point1];
                else result += nums1[point1] > nums2[point2] ? nums2[point2] : nums1[point1];
                result /= 2;
                return result
            }
        }
        if(typeof nums1[point1] === 'undefined' || typeof nums2[point2] === 'undefined') {
            if(typeof nums1[point1] === 'undefined') point2++;
            if(typeof nums2[point2] === 'undefined') point1++; 
        } else {
            if(nums1[point1] > nums2[point2]) point2++;
            else point1++;
        }
    }
};