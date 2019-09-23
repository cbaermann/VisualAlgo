let values = [];

let w = 100;
let sorted = false;
let arr = [0, 0, 0, 0];
let insertionArr = [1, 0];

function setup() {
    createCanvas(window.innerWidth - 20, window.innerHeight - 120);
    values = new Array(floor(width / w));
    for(let i = 0; i < values.length; i++) {
        values[i] = random(height);
    }
}

function draw() {
    background(255);
    
    //BUBBLE
    if(window.location.pathname === "/bubble") {
        arr = bubbleSort(arr);
        if(arr[0] > values.length - 1) {
            sorted = true;
            noLoop();
        }

        for(let i = 0; i < values.length; i++) {
            stroke(200);
            if(arr[0] < values.length - i) {
                fill(51);
            }
            else {
                fill(0, 128, 0);
            }
            if(arr[1] == i && arr[0] < values.length - i) {
                fill(128, 0, 0);
            }
            rect(i * w, height - values[i], w, values[i]);
        }
    }
    

    //SELECTION
    if(window.location.pathname === "/selection") {
        arr = selectionSort(arr);
        if(arr[0] > values.length - 1) {
            noLoop();
        }

        for(let i = 0; i < values.length; i++) {
            stroke(200);
            if(arr[0] <= 0 + i) {
                fill(51);
            }
            else {
                fill(0, 128, 0);
            }
            if(arr[2] == i) {
                fill(128, 0, 0);
            }
            rect(i * w, height - values[i], w, values[i]);
        }
    }

    //COCKTAIL
    if(window.location.pathname === "/cocktail") {
        arr = cocktailSort(arr);
        if(arr[0] > values.length / 2) {
            noLoop();
        }

        for(let i = 0; i < values.length; i++) {
            stroke(200);
            if(arr[0] < values.length - i && arr[3] <= i) {
                fill(51);
            }
            else {
                fill(0, 128, 0);
            }
            if(arr[1] == i && arr[0] < values.length - i) {
                        fill(128, 0, 0);
                    }
            rect(i * w, height - values[i], w, values[i]);
        }
    }

    //INSERTION
    if(window.location.pathname === "/insertion") {
        insertionArr = insertionSort(insertionArr);
        if(insertionArr[0] > values.length - 1) {
            noLoop();
        }

        for(let i = 0; i < values.length; i++) {
            stroke(200);
            if(insertionArr[0] < i) {
                fill(51);
            }
            else {
                fill(0, 128, 0);
            }
            if(i == insertionArr[1] && insertionArr[0] < values.length - 1) {
                fill(128, 0, 0);
            }
            rect(i * w, height - values[i], w, values[i]);
        }
    }

    //PANCAKE
    if(window.location.pathname === "/pancake") {
        arr = pancakeSort(arr);
        if(arr[0] > values.length - 1) {
            sorted = true;
            noLoop();
        }

        for(let i = 0; i < values.length; i++) {
            stroke(200);
            if(arr[0] < values.length - i) {
                fill(51);
            }
            else {
                fill(0, 128, 0);
            }
            if(arr[2] == i && arr[0] < values.length - i) {
                        fill(128, 0, 0);
                    }
            rect(i * w, height - values[i], w, values[i]);
        }
    }

    //BOGO
    if(window.location.pathname === "/bogo") {
        let sorted = bogoSort();
        if(sorted == true) {
            noLoop();
        }

        for(let i = 0; i < values.length; i++) {
            stroke(200);
            if(sorted == false) {
                fill(51);
            }
            else {
                fill(0, 128, 0);
            }
            rect(i * w, height - values[i], w, values[i]);
        }
    }


}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function flipSection(arr, a, b) {
    for(let i = a; i < b / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[b - i];
        arr[b - i] = temp;
    }
}

function bubbleSort(arr) {
    let i = arr[0];
    let j = arr[1];
    let a = values[j];
    let b = values[j + 1];
    if(a > b) {
        swap(values, j, j + 1);
    };
    if(i < values.length) {
        j += 1;
        if(j >= values.length - i - 1) {
            j = 0;
            i += 1;
        }
    }
    arr[0] = i;
    arr[1] = j;
    return arr;
};

function pancakeSort(arr) {
    let i = arr[0];
    let j = arr[1];
    let max = arr[2];
    let flipped = arr[3];
    if(flipped == 0) {
        if(values[max] < values[j]) {
            max = j;
        }
        if(i < values.length) {
            j += 1;
            if(j >= values.length - i) {
                j = 0;
                flipSection(values, 0, max);
                flipped = 1;
                max = 0;
            }
        }
    }
    else {
        flipSection(values, 0, values.length - 1 - i);
        i += 1;
        flipped = 0;
    }
    arr[0] = i;
    arr[1] = j;
    arr[2] = max;
    arr[3] = flipped;
    return arr;
};

function selectionSort(arr) {
    let i = arr[0];
    let j = arr[1];
    temp = arr[2];
    if(values[temp] > values[j]) {
        temp = j;
    }
    if(i < values.length) {
        j += 1;
        if(j > values.length - 1) {
            swap(values, i, temp);
            i += 1;
            j = i;
            temp = i;
        }
    }
    arr[0] = i;
    arr[1] = j;
    arr[2] = temp;
    return arr;
};

function cocktailSort(arr) {
    let i = arr[0];
    let j = arr[1];
    let dir = arr[2];
    let color = arr[3];
    if(dir == 0) {
        let a = values[j];
        let b = values[j + 1];
        if(a > b) {
            swap(values, j, j + 1);
        };
        if(i < values.length / 2) {
            j += 1;
            if(j >= values.length - i - 1) {
                i += 1;
                dir = 1;
            }
        }
    }
    if(dir == 1) {
        let a = values[j];
        let b = values[j - 1];
        if(a < b) {
            swap(values, j, j - 1);
        };
        if(i < values.length / 2) {
            j -= 1;
            if(j <= -1 + i) {
                color += 1;
                dir = 0;
            }
        }
    }
    arr[0] = i;
    arr[1] = j;
    arr[2] = dir;
    arr[3] = color;
    return arr;
};

function insertionSort(arr) {
    let i = arr[0];

    while(values[i] < values[i - 1]) {
        swap(values, i, i - 1);
        i--
    }
    arr[1] = i;
    arr[0] += 1;
    return arr;
};

function bogoSort() {
    let sorted = true;
    let a = values.length - 1;
    while(a >= 0) {
        let b = Math.floor(Math.random() * a + 1);
        let temp = values[b];
        values[b] = values[a];
        values[a] = temp;
        a--;
    }
    for(let i = 0; i < values.length; i++) {
        if(values[i] > values[i + 1]) {
            sorted = false;
        }
    }
    return sorted;
};