function countFeelings(string, array) {
    let str = string.split('');
    let num = 0;

    for (let word of array) {
        if (word.split('').every(l => str.includes(l))) {
            num++
        };
    }
    return num === 1? `${num} feeling.`:`${num} feelings.`;
};
    

console.log(countFeelings('yliausoenvjw', ['anger', 'awe', 'joy', 'love', 'grief']));