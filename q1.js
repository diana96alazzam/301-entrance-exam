'use strict'

// greaterThan([4,2,3,1],3)

var result = 0;
function greaterThan(par1, par2) {

    for (var i=0; i<par1.length; i++) {

        if (par1[i] > par2) {
            result++;
        }
    }
    return result;


}
// greaterThan([4, 5, 6, 1], 3);
greaterThan([2,8,-1],8);

console.log(result);

