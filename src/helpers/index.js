const formatMoney = ( value ) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    return formatter.format( value );
};

const calculateTotalPay = ( count, time) => {
    let total;
    
    if ( count < 5000 ) {
        total = count * 1.4;
    } else if ( count >= 5000 && count < 10000) {
        total = count * 1.3;
    } else if (count >= 10000 && count < 15000) {
        total = count * 1.2;
    } else {
        total = count * 1.1;
    }

    if ( time === 6 ) {
        total *= 1.1;
    } else if( time === 12 ){
        total *= 1.2;
    } else {
        total *= 1.3;
    }
    return total;
}

const monthlyPayment = (total, months) => {
}

export {
    formatMoney,
    calculateTotalPay
};