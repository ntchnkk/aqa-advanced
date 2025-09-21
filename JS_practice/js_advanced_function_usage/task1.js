function handleNum(num, evenCallback, oddCallback) {
    num % 2 === 0 ? evenCallback() : oddCallback();
}

const handleEven = () => console.log('number is even');
const handleOdd = () => console.log('number is odd');

handleNum(32, handleEven, handleOdd);
handleNum(41, handleEven, handleOdd);