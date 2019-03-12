// https://leetcode.com/problems/bulb-switcher-ii/

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var flipAll = function(lights) {
    var newLights = lights.slice();
    for(let i = 0; i < newLights.length; i++) {
        if(newLights[i] === 1) newLights[i] = 0;
        else newLights[i] = 1;
    }
    return newLights;
};

var flipEven = function(lights) {
    var newLights = lights.slice();
    for(let i = 0; i < newLights.length; i++) {
        if((i + 1) % 2 === 0) {
            if(newLights[i] === 1) newLights[i] = 0;
            else newLights[i] = 1;
        }
    }
    return newLights;
};

var flipOdd = function(lights) {
    var newLights = lights.slice();
    for(let i = 0; i < newLights.length; i++) {
        if((i + 1) % 2 !== 0) {
            if(newLights[i] === 1) newLights[i] = 0;
            else newLights[i] = 1;
        }
    }
    return newLights;
};

var flipNumber = function(lights) {
    var newLights = lights.slice();
    for(let i = 0; i < newLights.length; i++) {
        if((i + 1) % 3 === 1) {
            if(newLights[i] === 1) newLights[i] = 0;
            else newLights[i] = 1;
        }
    }
    return newLights;
};

var deleteDuplicatedCase = function(cases) {
    var newCases = cases.slice();
    for(let i = 0; i < newCases.length; i++) {
        for(let j = i + 1; j < newCases.length; j++) {
            let isSame = true;
            for(let index = 0; index < newCases[i].length; index++) {
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
    if(m === 0) {
        return 1;
    }
    for(let i = 0; i < n; i++) {
        lights.push(1);
    }
    for(let i = 0; i < m; i++) {
        const casesLength = cases.length
        if(i === 0) {
            cases.push(flipAll(lights));
            cases.push(flipEven(lights));
            cases.push(flipOdd(lights));
            cases.push(flipNumber(lights));
        } else {
            for(let j = 0; j < casesLength; j++) {
                cases.push(flipAll(cases[j]));
                cases.push(flipEven(cases[j]));
                cases.push(flipOdd(cases[j]));
                cases.push(flipNumber(cases[j]));
            }
        }
        cases.splice(0, casesLength)
        cases = deleteDuplicatedCase(cases).slice();
    }
    return cases.length;
};