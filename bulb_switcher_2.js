// https://leetcode.com/problems/bulb-switcher-ii/

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var flipAll = function(lights) {
    const newLights = lights.slice();
    for(let i = 0; i < newLights.length; i++) {
        if(newLights[i] === 1) newLights[i] = 0;
        else newLights[i] = 1;
    }
    return newLights;
};

var flipEven = function(lights) {
    const newLights = lights.slice();
    for(let i = 0; i < newLights.length; i++) {
        if((i + 1) % 2 === 0) {
            if(newLights[i] === 1) newLights[i] = 0;
            else newLights[i] = 1;
        }
    }
    return newLights;
};

var flipOdd = function(lights) {
    const newLights = lights.slice();
    for(let i = 0; i < newLights.length; i++) {
        if((i + 1) % 2 !== 0) {
            if(newLights[i] === 1) newLights[i] = 0;
            else newLights[i] = 1;
        }
    }
    return newLights;
};

var flipNumber = function(lights) {
    const newLights = lights.slice();
    for(let i = 0; i < newLights.length; i++) {
        if((i + 1) % 3 === 1 && i + 1 !== 1) {
            if(newLights[i] === 1) newLights[i] = 0;
            else newLights[i] = 1;
        }
    }
    return newLights;
};

var deleteDuplicatedCase = function(cases) {
    const newCases = cases.slice();
    for(let i = 0; i < newCases.length; i++) {
        for(let j = i + 1; j < newCases.length; j++) {
            let isSame = true;
            for(let index in newCases[i]) {
                if(newCases[i][index] !== newCases[j][index]) {
                    isSame = false;
                }
            }
            if(isSame) {
                newCases.splice(j, 1);
                j--;
            }
        }
    }
    return newCases;
};

var flipLights = function(n, m) {
    var lights = []
    var cases = []
    for(let i = 0; i < n; i++) {
        lights.push(1);
    }
    for(let i = 0; i < m; i++) {
        if(i === 0) {
            cases.push(flipAll(lights));
            cases.push(flipEven(lights));
            cases.push(flipOdd(lights));
            cases.push(flipNumber(lights));
        } else {
            for(let j = 0; j < cases.length; j++) {
                cases.push(flipAll(cases[j]));
                cases.push(flipEven(cases[j]));
                cases.push(flipOdd(cases[j]));
                cases.push(flipNumber(cases[j]));
            }
        }
        cases = deleteDuplicatedCase(cases).slice();
    }
};

const test = [1, 1, 1, 1, 1, 1, 1];
console.log(flipAll(test));
console.log(flipEven(test));
console.log(flipOdd(test));
console.log(flipNumber(test));