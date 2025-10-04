function getDivisorsCnt(n){
  let num = 0;
  for (let i = 1; i <= Math.sqrt(n); i++){
    if (n % i === 0){
        num += (n / i === i)? 1 : 2;
        }
  }
  return num;
};

console.log(getDivisorsCnt(12));