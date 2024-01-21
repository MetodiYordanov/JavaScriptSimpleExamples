function largestNum(firstNum, secondNum, thirdNum) {
    let result = firstNum;

    if (firstNum < secondNum && secondNum > thirdNum) {
        result = secondNum;
    }
    else if (firstNum < thirdNum && thirdNum > secondNum) {
        result = thirdNum;
    }

    console.log(`The largest number is ${result}.`);
}

largestNum(5, -3, 16);
largestNum(-3, -5, -22.5);