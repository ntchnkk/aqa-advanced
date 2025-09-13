function sumArray(numbers) {
    if (!Array.isArray(numbers) || numbers.length <= 1) return 0;

    let sum = 0;
    let minNumber = numbers[0];
    let maxNumber = numbers[0];

    for (let num of numbers) {
        sum += num;
        if (num < minNumber) minNumber = num;
        if (num > maxNumber) maxNumber = num;
    };

    return sum - minNumber - maxNumber;

}

console.log(sumArray([1, 8, 9, 11, 2, 1]));