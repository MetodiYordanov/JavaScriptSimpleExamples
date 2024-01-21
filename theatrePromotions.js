function ticketPrices(day, age) {
    let result;
    switch (day) {
        case 'Weekday':
            if (age < 0 || age > 122){
                result = 'Error!';
            }
            else if (!(age > 18 && age <= 64)) {
                result = '12$';
            }
            else {
                result = '18$';
            }
        break;
        case 'Weekend':
            if (age < 0 || age > 122){
                result = 'Error!';
            }
            else if (!(age > 18 && age <= 64)) {
                result = '15$';
            }
            else {
                result = '20$';
            }
        break;
        case 'Holiday':
            if (age < 0 || age > 122){
                result = 'Error!';
            }
            else if (age >= 0 && age <= 18) {
                result = '5$';
            }
            else if (age > 18 && age <= 64) {
                result = '12$';
            }
            else if (age > 64 && age <= 122) {
                result = '10$';
            }
        break;
    }

    console.log(result);
}

ticketPrices('Weekday', 42);
ticketPrices('Holiday', -12);
ticketPrices('Holiday', 15);