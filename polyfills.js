// Polyfill for bind
if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(callback, thisArg){
        if(typeof callback !== 'function'){
            throw new TypeError(`${callback} is not a function`)
        }
        let newArr = [];
        for(let i = 0; i < this.length; i++){
            if(callback.call(thisArg, this[i], i, this)) newArr.push(this[i])
        }
    return newArr
    }
}

const numbers = [1, 2, 3, 4, 5, 6];

// Test your polyfill
const evenNumbers = numbers.myFilter(num => num % 2 === 0);
console.log("Your Filter Output:", evenNumbers); 
// Expected Output: [2, 4, 6]

// // Compare with native filter
const nativeEvenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Matches Native?", JSON.stringify(evenNumbers) === JSON.stringify(nativeEvenNumbers));
// // Expected Output: true
const words = ['apple', 'banana', 'cherry', 'date'];

// // Filter items where the index is greater than 1
const filteredWords = words.myFilter((word, index, words) => {
    console.log(`Processing item at index ${index} inside array of length ${words.length}`);
    return index > 1;
});

console.log("Filtered Output:", filteredWords);


// // Polyfill for map
if(!Array.prototype.myMap){
    Array.prototype.myMap = function(callback, thisArg){
        if(typeof callback !== 'function'){
            throw new TypeError(`${callback} is not a function`)
        }
        let newArr = [];
        for(let i = 0; i < this.length; i++){
            let newVal = callback.call(thisArg, this[i], i, this)
            newArr.push(newVal)
        }
    return newArr
    }
}

const evenNumbers2 = numbers.myMap(num => num*2);
console.log("Your Map Output:", evenNumbers2); 