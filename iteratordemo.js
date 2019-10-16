let numbers = [100, 200, 300];
let iter = numbers[Symbol.iterator]();
iter.next();
iter.next();
iter.next();
console.log(iter.next());

//custom iterator
let numberGen = {
    [Symbol.iterator]() {
        let nextNum = 500;
        return {
            next() {
                return {
                    value: nextNum++,
                    done: false
                }
            }
        }
    }
};

iter = numberGen[Symbol.iterator]();
console.log(iter.next().value);
console.log(iter.next().value);


function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
        next: function() {
            let result;
            if (nextIndex < end) {
                result = { value: nextIndex, done: false }
                nextIndex += step;
                iterationCount++;
                return result;
            }
            return { value: iterationCount, done: true }
        }
    };
    return rangeIterator;
}


let it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
    console.log(result.value); // 1 3 5 7 9
    result = it.next();
}

console.log("Iterated over sequence of size: ", result.value); // [5 numbers returned, that took interval in between: 0 to 10]
