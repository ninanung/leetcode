/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    if(!gas.length) return -1;
    let remainGas = 0;
    let remainCost = 0;
    let point = 0;
    for(let i = 0; i < gas.length; i++) {
        remainGas += gas[i] - cost[i];
        if(remainGas < 0) {
            remainCost += remainGas;
            remainGas = 0;
            point = i + 1;
        }
    }
    if(remainGas + remainCost >= 0) return point;
    else return - 1
};