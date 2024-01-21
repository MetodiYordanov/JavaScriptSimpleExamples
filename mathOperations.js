function operations(firstNumber, secondNumber, operation) {
    let result;
    switch (operation) {
        case '+':
            result = firstNumber + secondNumber;
        break;
        case '-':
            result = firstNumber - secondNumber;
        break;
        case '*':
            result = firstNumber * secondNumber;
        break;
        case '/':
            result = firstNumber / secondNumber;
        break;
        case '%':
            result = firstNumber % secondNumber;
        break;
        case '**':
            result = firstNumber ** secondNumber;
        break;
    }

    console.log(result);
}

operations(5, 6, '+');
operations(3, 5.5, '*');