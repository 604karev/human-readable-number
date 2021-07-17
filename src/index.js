module.exports = function toReadable(number) {
    //make const, not war

    const firstTen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const secondTen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const getNumberHundreds = number => firstTen[Math.floor(number / 100)];
    const getNumberDozens = number => dozens[Math.floor(number / 10) - 2];
    const getNumberUnits = number => firstTen[number % 10];
    const getHundredDozens = number => Math.floor(number % 100);
    const getSecondTen = number => secondTen[number - 10];

    const getUnit = number => number % 10 ?
        getNumberUnits(number) : '';

    const getDozen = number => number < 10 ?
        firstTen[number] : (number < 100 && number >= 20) ?
            `${getNumberDozens(number)} ${getUnit(number)}` : getSecondTen(number);

    const getReadableNumber = number => number === 0 ?
        'zero' : number >= 100 ?
            `${getNumberHundreds(number)} hundred ${getDozen(getHundredDozens(number))}` : getDozen(number);

    return getReadableNumber(number).trim();
};
