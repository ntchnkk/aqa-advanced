const numbersRecursion = (num) => {
    if (num <= 0) return;
    console.log(num);
    numbersRecursion(num-1);
}

numbersRecursion(5);