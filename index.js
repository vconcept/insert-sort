const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function insertSort(arr = []) {
    function askForNumber() {
    
    rl.question("Enter a number (or press Enter to stop): ", (input) => {
        if (input.trim() === "") {
            console.log("Final sorted array:", arr);
            rl.close();
            return;
        }

        let i = parseInt(input, 10);
        if (isNaN(i)) {
            console.log("Invalid input.Please enter a valid number.");
            rl.close();
            return;
        }
        arr.push(i);
        // for (num in arr) {
        //     if (i > num){

        //     }
        // }
        for (let x = arr.length - 2 ; x >= 0; x--){
        // if (arr[x] > arr[x + 1]) {
        //     let temp = arr[x];
        //     arr[x] = arr[x + 1];
        //     arr[x] = temp;
        if (arr[x] > i) {
            let temp = i;
            arr[x + 1] = arr[x];
            arr[x] = temp;
        }
        else {
            break;
        }
    }
    console.log("Sorted for now", arr);
    askForNumber();
    });
    }
askForNumber();
}

insertSort([23, 34, 67, 122]);
