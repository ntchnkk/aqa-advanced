function smaller(nums) {
  const newArr = [];
  for (let i = 0; i < nums.length; i++) {
    let num = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        num += 1;
      }
    }
    newArr.push(num);
  }
  return newArr;
}

console.log(smaller([5, 4, 3, 2, 1]));
