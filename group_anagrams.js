// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 /*
지금까지 모르고 있던 사실 하나. 객체에 대한 for 루프를 in구문으로 돌릴 수 있다.
객체에 대해서 리스트와 비슷하게 []를 사용하여 매칭할 수 있다.
이 두가지를 이용하면 리스트처럼 값을 대응시키고 대응시킨 값을 for문으로 출력할 수도 있다. 기억할 것.
 */
var groupAnagrams = function(strs) {
    var mapping = {};
    for (var i = 0; i < strs.length; i++) {
        var str = strs[i];
        var sorted = str.split('').sort().join('');
        if (mapping[sorted] === undefined) {
            mapping[sorted] = [str];
        } else {
            mapping[sorted].push(str);
        }
    }
    var output = [];
    for (var arr in mapping) {
        output.push(mapping[arr]);
    }
    return output;
};