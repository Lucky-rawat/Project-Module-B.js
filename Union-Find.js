function merge(finalArray, pos, subArray) {
for (var k = 0; k < subArray.length; k++) {
    if (finalArray[pos].indexOf(subArray[k]) < 0)
        finalArray[pos].push(subArray[k]);
}

}

function union(arr) {
var finalArray = [arr[0]],
    positions = {
        0: 0
    };
for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        for (var k = 0; k < arr[i].length; k++) {
            if (arr[j].indexOf(arr[i][k]) >= 0) {
                if (i in positions) {
                    merge(finalArray, positions[i], arr[j]);
                    positions[j] = positions[i];
                } else if (j in positions) {
                    merge(finalArray, positions[j], arr[i]);
                    positions[i] = positions[j];
                } else {
                    var pos = finalArray.length;
                    finalArray.push([]);
                    merge(finalArray, pos, arr[i]);
                    merge(finalArray, pos, arr[j]);
                    positions[i] = positions[j] = pos;
                }
                break;
            }

        }
    }
    if (!(i in positions)) {
        finalArray.push(arr[i]);
        positions[i] = finalArray.length - 1;
    }
}
return finalArray;
}
console.log(union([[1,3], [6,8], [3,8], [2,7]]));
console.log(union([[8,5], [10,8], [4,18], [20,12], [5,2], [17,2], [13,25],[29,12], [22,2], [17,11]]));
