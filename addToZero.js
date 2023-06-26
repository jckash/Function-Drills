// Starting array
let array = [32, -25, 25, 0, 6, 10, 9]

// Write your solution below:
let answer = false;
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++){
        if (i !== j) {
            if (array[i] + array[j] === 0) {
                answer = true;
            }
        }
    }
}
console.log(answer);