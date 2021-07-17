module.exports = function toReadable(number) {
    //make const, not war

    const firstTen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const secondTen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const numberHundreds = number => Math.floor(number / 100);
    const numberDozens = number => Math.floor(number / 10) - 2;
    const numberUnits = number => firstTen[number % 10];
    const hundredDozens = number => Math.floor(number % 100);

    const getUnit = number => number % 10 ?
        numberUnits(number) : '';

    const getDozen = number => number < 10 ?
        firstTen[number] : (number < 100 && number >= 20) ?
            `${dozens[numberDozens(number)]} ${getUnit(number)}` : secondTen[number - 10];

    const getReadableNumber = number => number === 0 ?
        'zero' : number >= 100 ?
            `${firstTen[numberHundreds(number)]} hundred ${getDozen(hundredDozens(number))}` : getDozen(number);

    return getReadableNumber(number).trim();
};
