


let values = [];

function shuf(val) {
    let j = Math.floor(Math.random() * val + 1);
    let tempVal = values[j];
    values[j] = values[val];
    values[val] = tempVal;
    val -= 1;
    return val;
}