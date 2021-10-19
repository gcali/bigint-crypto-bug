import * as utils from 'bigint-crypto-utils';

const curiousAbout = 3;
utils.isProbablyPrime(curiousAbout).then(isItPrime => {
    console.log(`${curiousAbout}: ${isItPrime}`);
});
