// ВАЖНО!!! чтобы эта часть кода работала, нужно чтобы были подключены файлы functions.js и advansedFunction_millions.js

function millionsToWords (number) {
    let stringToArr = String(number).split('');
    let result = [];
    
    let remainder = parseInt(stringToArr.slice(1).join(''));

    switch (true) {
        case stringToArr.length === 7:
            remainder = parseInt(stringToArr.slice(1).join(''));
        break;

        case stringToArr.length === 8:
            remainder = parseInt(stringToArr.slice(2).join(''));
        break;
        
        case stringToArr.length === 9:
            remainder = parseInt(stringToArr.slice(3).join(''));
        break;

    }

    switch (true) {
        case stringToArr.length === 7 && stringToArr.slice(0, 1).join('') === '1' :
            result.push(numberToWords(stringToArr.slice(0, 1).join('')));
            result.push('миллион');
            console.log('m case 1-1');
            result.push(thousandsToWords(remainder));
            console.log('m case 1-2');
            break;

        case stringToArr.length === 7 && Number(stringToArr.slice(0, 1).join('')) > 1 && Number(stringToArr.slice(0, 1).join('')) < 5 :
            result.push(numberToWords(stringToArr.slice(0, 1).join('')));
            result.push('миллиона');
            console.log('m case 2-1');
            result.push(thousandsToWords(remainder));
            console.log('m case 2-2');
            break; 
    
        case stringToArr.length === 7 && Number(stringToArr.slice(0, 1).join('')) > 4 && Number(stringToArr.slice(0, 1).join('')) <= 9 :
            result.push(numberToWords(stringToArr.slice(0, 1).join('')));
            result.push('миллионов');
            console.log('m case 3-1');
            result.push(thousandsToWords(remainder));
            console.log('m case 3-2');
        break;

        case  stringToArr.length === 8 && Number(stringToArr.slice(0, 2).join('')) % 10 === 0 :
            result.push(numberToWords(stringToArr.slice(0, 2).join('')));
            result.push('миллионов');
            console.log('m case 4-1');
            result.push(thousandsToWords(remainder));
            console.log('m case 4-2');
        break;
        
        case  stringToArr.length === 8 && Number(stringToArr.slice(0, 2).join('')) > 10 && Number(stringToArr.slice(0, 2).join('')) < 20:
            result.push(numberToWords(stringToArr.slice(0, 2).join('')));
            
            result.push('миллионов');
            console.log('m case 5-1');
            result.push(thousandsToWords(remainder));
            console.log('m case 5-2');
        break;

        case  stringToArr.length === 8 && Number(stringToArr.slice(0, 2).join('')) > 10 && Number(stringToArr.slice(0, 2).join('')) < 20:
            result.push(numberToWords(stringToArr.slice(0, 2).join('')));
            
            result.push('миллионов');
            console.log('m case 6-1');
            result.push(thousandsToWords(remainder));
            console.log('m case 6-2');
        break;

        case  stringToArr.length === 8 && Number(stringToArr.slice(0, 2).join('')) > 20 && Number(stringToArr.slice(0, 2)[1]) === 1 && Number(stringToArr.slice(0, 1).join('')) < 10 :
            result.push(numberToWords(stringToArr.slice(0, 2).join('')));
            result.push('миллион');
            console.log('m case 7-1');
            result.push(thousandsToWords(remainder));
            console.log('m case 7-2');
        break;

        case  stringToArr.length === 8 && Number(stringToArr.slice(0, 2).join('')) > 20 && Number(stringToArr.slice(0, 2)[1]) > 1 && Number(stringToArr.slice(0, 2)[1]) < 5 :
            result.push(numberToWords(stringToArr.slice(0, 2).join('')));
            result.push('миллиона');
            console.log('m case 8-1');
            result.push(thousandsToWords(remainder));
            console.log('m case 8-2');
        break;

        case  stringToArr.length === 8 && Number(stringToArr.slice(0, 2).join('')) > 20 && Number(stringToArr.slice(0, 2)[1]) > 4 && Number(stringToArr.slice(0, 2)[1]) < 10 :
            result.push(numberToWords(stringToArr.slice(0, 2).join('')));
            result.push('миллионов');
            console.log('m case 9-1');
            result.push(thousandsToWords(remainder));
            console.log('m case 9-2');
        break;

        case  stringToArr.length === 8 && Number(stringToArr.slice(0, 2).join('')) % 10 === 0 :
            result.push(numberToWords(stringToArr.slice(0, 2).join('')));
            result.push('миллионов');
            console.log('m case 10-1');
            result.push(thousandsToWords(remainder));
            console.log('m case 10-2');
        break;
        
        case  stringToArr.length === 8 && Number(stringToArr.slice(0, 2).join('')) > 10 && Number(stringToArr.slice(0, 2).join('')) < 20:
            result.push(numberToWords(stringToArr.slice(0, 2).join('')));
            
            result.push('миллионов');
            console.log('m case 11-1');
            result.push(thousandsToWords(remainder));
            console.log('m case 11-2');
        break;

        case  stringToArr.length === 8 && Number(stringToArr.slice(0, 2).join('')) > 10 && Number(stringToArr.slice(0, 2).join('')) < 20:
            result.push(numberToWords(stringToArr.slice(0, 2).join('')));
            
            result.push('миллионов');
            console.log('m case 12-1');
            result.push(thousandsToWords(remainder));
            console.log('m case 12-2');
        break;

        case  stringToArr.length === 8 && Number(stringToArr.slice(0, 2).join('')) > 20 && Number(stringToArr.slice(0, 2)[1]) === 1 && Number(stringToArr.slice(0, 1).join('')) < 10 :
            result.push(numberToWords(stringToArr.slice(0, 2).join('')));
            result.push('миллион');
            console.log('m case 13-1');
            result.push(thousandsToWords(remainder));
            console.log('m case 13-2');
        break;

        case  stringToArr.length === 8 && Number(stringToArr.slice(0, 2).join('')) > 20 && Number(stringToArr.slice(0, 2)[1]) > 1 && Number(stringToArr.slice(0, 2)[1]) < 5 :
            result.push(numberToWords(stringToArr.slice(0, 2).join('')));
            result.push('миллиона');
            console.log('m case 14-1');
            result.push(thousandsToWords(remainder));
            console.log('m case 14-2');
        break;

        case  stringToArr.length === 8 && Number(stringToArr.slice(0, 2).join('')) > 20 && Number(stringToArr.slice(0, 2)[1]) > 4 && Number(stringToArr.slice(0, 2)[1]) < 10 :
            result.push(numberToWords(stringToArr.slice(0, 2).join('')));
            result.push('миллионов');
            console.log('m case 15-1');
            result.push(thousandsToWords(remainder));
            console.log('m case 15-2');
        break;

        case  stringToArr.length === 9 && Number(stringToArr.slice(0, 3).join('')) % 10 === 0 :
            result.push(numberToWords(stringToArr.slice(0, 3).join('')));
            result.push('миллионов');
            console.log('m case 16-1');
            remainder < 1000 ? result.push(numberToWords(remainder)) : result.push(thousandsToWords(remainder));
            console.log('m case 16-2');
        break;

        case  stringToArr.length === 9 && (Number(stringToArr.slice(0, 3).join('')) - 1) % 10 === 0:
            result.push(numberToWords(stringToArr.slice(0, 3).join('')));
            result.push('миллион');
            console.log('m case 17-1');
            remainder < 1000 ? result.push(numberToWords(remainder)) : result.push(thousandsToWords(remainder));
            console.log('m case 17-2');
        break;

        case  stringToArr.length === 9 && Number(stringToArr.slice(0, 3).join('')) > 101 && Number(stringToArr.slice(0, 3).join('')) < 105:
            result.push(numberToWords(stringToArr.slice(0, 3).join('')));
            result.push('миллиона');
            console.log('m case 18-1');
            remainder < 1000 ? result.push(numberToWords(remainder)) : result.push(thousandsToWords(remainder));
            console.log('m case 18-2');
        break;

        case  stringToArr.length === 9 && Number(stringToArr.slice(0, 3).join('')) > 104 && Number(stringToArr.slice(0, 3).join('')) < 120:
            result.push(numberToWords(stringToArr.slice(0, 3).join('')));
            result.push('миллионов');
            console.log('m case 19-1');
            remainder < 1000 ? result.push(numberToWords(remainder)) : result.push(thousandsToWords(remainder));
            console.log('m case 19-2');
        break;

        case stringToArr.length === 9 && Number(stringToArr.slice(0, 3).join('')) > 121 && (Number(stringToArr.slice(0, 3).join('')) - 2) % 10 === 0 || (Number(stringToArr.slice(0, 3).join('')) - 3) % 10 === 0 || (Number(stringToArr.slice(0, 3).join('')) - 3) % 10 === 0 || (Number(stringToArr.slice(0, 3).join('')) - 4) % 10 === 0 :
            result.push(numberToWords(stringToArr.slice(0, 3).join('')));
            result.push('миллиона');
            console.log('m case 20-1');
            remainder < 1000 ? result.push(numberToWords(remainder)) : result.push(thousandsToWords(remainder));
            console.log('m case 20-2');
        break;

        case stringToArr.length === 9 && Number(stringToArr.slice(0, 3).join('')) > 121 && (Number(stringToArr.slice(0, 3).join('')) - 5) % 10 === 0 || (Number(stringToArr.slice(0, 3).join('')) - 6) % 10 === 0 || (Number(stringToArr.slice(0, 3).join('')) - 7) % 10 === 0 || (Number(stringToArr.slice(0, 3).join('')) - 8) % 10 === 0 || (Number(stringToArr.slice(0, 3).join('')) - 9) % 10 === 0:
            result.push(numberToWords(stringToArr.slice(0, 3).join('')));
            result.push('миллионов');
            console.log('m case 21-1');
            remainder < 1000 ? result.push(numberToWords(remainder)) : result.push(thousandsToWords(remainder));
            console.log('m case 22-2');
        break;

    }

    result = result.join(' ');

return result;    
}

// console.log(millionsToWords(187953215));
// console.log(numberToWords(1));
// console.log(thousandsToWords(122365));