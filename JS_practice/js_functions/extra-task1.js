function returnStr(str1, str2) {
  return str1.length < str2.length ? str1 + str2 + str1 : str2 + str1 + str2;
}

console.log(returnStr('CC', 'DDD'));
