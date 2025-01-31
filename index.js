const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function insertSort(arr = [], i) {
    rl.question("Enter a number: ", (input) => {
        let i = parseInt(input, 10);
    arr.push(i);
    // for (num in arr) {
    //     if (i > num){

    //     }
    // }
    for (let x = arr.length - 2 ; x >= 0; x--){
        if (arr[x] > i) {
           arr[x + 1] = arr[x];
           arr[x] = i;
        }
        else {
            break;
        }
    }
    console.log(arr);
    rl.close();
    });
}

insertSort([23, 34, 67, 122]);