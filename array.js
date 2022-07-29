const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
];


for (let i = 0; i < countries.length; i++) {
    let letters = [];
    let first = [];
    let sum = [];
    let count = countries[i].split('')
    sum.push(count.length)
    first.push(countries[i]);
    for (let j = 0; j < 2; j++) {
        letters.push(countries[i][j]);
    }
    // console.log(first, letters, sum)
    let concate = first.concat(letters);
    let final = concate.concat(sum);
    console.log(final);
}

