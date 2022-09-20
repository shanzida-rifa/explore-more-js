// 1.if ticket number is less than 100, per ticket price: 100
// 2.if ticket number is more than 100,but less than 200,first hundred ticket 100tk/tckt,rest per ticket price: 90
// if you purchase more than 200tickets
// first 100=100tk
// 101-200=90tk
// 200+=70tk
function ticketPrice(number) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restRate = 70;
    if (number <= 100) {
        const price = number * first100Rate;
        return price;
    }
    else if (number <= 200) {
        const first100Price = 100 * first100Rate;
        const rest = number - 100;
        const totalprice = first100Price + rest * second100Rate;
        return totalprice;

    }
    else {
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const resticket = number - 200;
        const restTotalPrice = first100Price + second100Price + resticket * restRate;
        return restTotalPrice;
    }
}

const price = ticketPrice(120);
console.log(price);