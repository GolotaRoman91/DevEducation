// ВАЖНО!!! чтобы эта часть кода работала, нужно чтобы были подключены файлы functions.js , advansedFunction_millions.js , advansedFunction_billions.js

function billionssToWords (number) {
    let stringToArr = String(number).split('');
    let result = [];
    
    let remainder = parseInt(stringToArr.slice(1).join(''));

    switch (true) {
        case stringToArr.length === 10:
            remainder = parseInt(stringToArr.slice(1).join(''));
        break;

        case stringToArr.length === 11:
            remainder = parseInt(stringToArr.slice(2).join(''));
        break;
        
        case stringToArr.length === 12:
            remainder = parseInt(stringToArr.slice(3).join(''));
        break;

    }

    let billions = parseInt(stringToArr.slice(0, 1).join(''));

    switch (true) {
        case stringToArr.length === 10:
            billions = parseInt(stringToArr.slice(0, 1).join(''));
        break;

        case stringToArr.length === 11:
            billions = parseInt(stringToArr.slice(0, 2).join(''));
        break;
        
        case stringToArr.length === 12:
            billions = parseInt(stringToArr.slice(0, 3).join(''));
        break;

    }

    switch(true) {
        case stringToArr.length === 10 && stringToArr[0] === '1':
            result.push(numberToWords(Number(stringToArr[0])));
            result.push('миллиард');
            console.log('b case 1-1');
            result.push(millionsToWords(remainder));
            console.log('b case 1-2');
        break;

        case stringToArr.length === 10 && (stringToArr[0] === '2' || stringToArr[0] === '3' || stringToArr[0] === '4'):
            result.push(numberToWords(Number(stringToArr[0])));
            result.push('миллиарда');
            console.log('b case 2-1');
            result.push(millionsToWords(remainder));
            console.log('b case 2-2');
        break;

        case stringToArr.length === 10 && (stringToArr[0] === '5' || stringToArr[0] === '6' || stringToArr[0] === '8' || stringToArr[0] === '9'):
            result.push(numberToWords(Number(stringToArr[0])));
            result.push('миллиардов');
            console.log('b case 3-1');
            result.push(millionsToWords(remainder));
            console.log('b case 3-2');
        break;

        case stringToArr.length === 11 && Number(stringToArr.slice(1, 3).join('')) % 10 === 0 :
            result.push(numberToWords(Number(stringToArr.slice(0, 2).join(''))));
            result.push('миллиардов');
            console.log('b case 4-1');
            result.push(millionsToWords(remainder));
            console.log('b case 4-2');
        break;

        case  stringToArr.length === 11 && Number(stringToArr.slice(0, 2).join('')) > 10 && Number(stringToArr.slice(0, 2).join('')) < 20:
            result.push(numberToWords(stringToArr.slice(0, 2).join('')));
            
            result.push('миллиардов');
            console.log('b case 5-1');
            result.push(millionsToWords(remainder));
            console.log('b case 5-2');
        break;

        case  stringToArr.length === 11 && Number(stringToArr.slice(0, 2).join('')) > 20 && Number(stringToArr.slice(0, 2)[1]) === 1 && Number(stringToArr.slice(0, 1).join('')) < 10 :
            result.push(numberToWords(stringToArr.slice(0, 2).join('')));
            result.push('миллиард');
            console.log('b case 6-1');
            result.push(millionsToWords(remainder));
            console.log('b case 6-2');
        break;

        case  stringToArr.length === 11 && Number(stringToArr.slice(0, 2).join('')) > 20 && Number(stringToArr.slice(0, 2)[1]) > 1 && Number(stringToArr.slice(0, 2)[1]) < 5 :
            result.push(numberToWords(stringToArr.slice(0, 2).join('')));
            result.push('миллиарда');
            console.log('b case 7-1');
            result.push(millionsToWords(remainder));
            console.log('b case 7-2');
        break;

        case  stringToArr.length === 11 && Number(stringToArr.slice(0, 2).join('')) > 20 && Number(stringToArr.slice(0, 2)[1]) > 4 && Number(stringToArr.slice(0, 2)[1]) < 10 :
            result.push(numberToWords(stringToArr.slice(0, 2).join('')));
            result.push('миллиардов');
            console.log('b case 8-1');
            result.push(millionsToWords(remainder));
            console.log('b case 8-2');
        break;

        case  stringToArr.length === 11 && Number(stringToArr.slice(0, 2).join('')) % 10 === 0 :
            result.push(numberToWords(stringToArr.slice(0, 2).join('')));
            result.push('миллиардов');
            console.log('b case 9-1');
            result.push(millionsToWords(remainder));
            console.log('b case 9-2');
        break;
        
        case  stringToArr.length === 11 && Number(stringToArr.slice(0, 2).join('')) > 10 && Number(stringToArr.slice(0, 2).join('')) < 20:
            result.push(numberToWords(stringToArr.slice(0, 2).join('')));
            
            result.push('миллиардов');
            console.log('b case 10-1');
            result.push(millionsToWords(remainder));
            console.log('b case 10-2');
        break;

        case  stringToArr.length === 11 && Number(stringToArr.slice(0, 2).join('')) > 10 && Number(stringToArr.slice(0, 2).join('')) < 20:
            result.push(numberToWords(stringToArr.slice(0, 2).join('')));
            
            result.push('миллиардов');
            console.log('b case 11-1');
            result.push(millionsToWords(remainder));
            console.log('b case 11-2');
        break;

        case  stringToArr.length === 11 && Number(stringToArr.slice(0, 2).join('')) > 20 && Number(stringToArr.slice(0, 2)[1]) === 1 && Number(stringToArr.slice(0, 1).join('')) < 10 :
            result.push(numberToWords(stringToArr.slice(0, 2).join('')));
            result.push('миллиардов');
            console.log('b case 12-1');
            result.push(millionsToWords(remainder));
            console.log('b case 12-2');
        break;

        case  stringToArr.length === 11 && Number(stringToArr.slice(0, 2).join('')) > 20 && Number(stringToArr.slice(0, 2)[1]) > 1 && Number(stringToArr.slice(0, 2)[1]) < 5 :
            result.push(numberToWords(stringToArr.slice(0, 2).join('')));
            result.push('миллиардов');
            console.log('b case 13-1');
            result.push(millionsToWords(remainder));
            console.log('b case 13-2');
        break;

        case  stringToArr.length === 11 && Number(stringToArr.slice(0, 2).join('')) > 20 && Number(stringToArr.slice(0, 2)[1]) > 4 && Number(stringToArr.slice(0, 2)[1]) < 10 :
            result.push(numberToWords(stringToArr.slice(0, 2).join('')));
            result.push('миллиардов');
            console.log('b case 14-1');
            result.push(millionsToWords(remainder));
            console.log('b case 14-2');
        break;

        case  stringToArr.length === 12 && Number(stringToArr.slice(0, 3).join('')) % 10 === 0 :
            result.push(numberToWords(stringToArr.slice(0, 3).join('')));
            result.push('миллиардов');
            console.log('b case 15-1');
            remainder < 1000 ? result.push(numberToWords(remainder)) : result.push(millionsToWords(remainder));
            console.log('b case 15-2');
        break;

        case  stringToArr.length === 12 && (Number(stringToArr.slice(0, 3).join('')) - 1) % 10 === 0:
            result.push(numberToWords(stringToArr.slice(0, 3).join('')));
            result.push('миллиард');
            console.log('b case 16-1');
            remainder < 1000 ? result.push(numberToWords(remainder)) : result.push(millionsToWords(remainder));
            console.log('b case 16-2');
        break;

        case  stringToArr.length === 12 && Number(stringToArr.slice(0, 3).join('')) > 101 && Number(stringToArr.slice(0, 3).join('')) < 105:
            result.push(numberToWords(stringToArr.slice(0, 3).join('')));
            result.push('миллиарда');
            console.log('b case 17-1');
            remainder < 1000 ? result.push(numberToWords(remainder)) : result.push(millionsToWords(remainder));
            console.log('b case 17-2');
        break;

        case  stringToArr.length === 12 && Number(stringToArr.slice(0, 3).join('')) > 104 && Number(stringToArr.slice(0, 3).join('')) < 120:
            result.push(numberToWords(stringToArr.slice(0, 3).join('')));
            result.push('миллиардов');
            console.log('b case 18-1');
            remainder < 1000 ? result.push(numberToWords(remainder)) : result.push(millionsToWords(remainder));
            console.log('b case 18-2');
        break;

        case stringToArr.length === 12 && Number(stringToArr.slice(0, 3).join('')) > 121 && (Number(stringToArr.slice(0, 3).join('')) - 2) % 10 === 0 || (Number(stringToArr.slice(0, 3).join('')) - 3) % 10 === 0 || (Number(stringToArr.slice(0, 3).join('')) - 3) % 10 === 0 || (Number(stringToArr.slice(0, 3).join('')) - 4) % 10 === 0 :
            result.push(numberToWords(stringToArr.slice(0, 3).join('')));
            result.push('миллиарда');
            console.log('b case 19-1');
            remainder < 1000 ? result.push(numberToWords(remainder)) : result.push(millionsToWords(remainder));
            console.log('b case 19-2');
        break;

        case stringToArr.length === 12 && Number(stringToArr.slice(0, 3).join('')) > 121 && (Number(stringToArr.slice(0, 3).join('')) - 5) % 10 === 0 || (Number(stringToArr.slice(0, 3).join('')) - 6) % 10 === 0 || (Number(stringToArr.slice(0, 3).join('')) - 7) % 10 === 0 || (Number(stringToArr.slice(0, 3).join('')) - 8) % 10 === 0 || (Number(stringToArr.slice(0, 3).join('')) - 9) % 10 === 0:
            result.push(numberToWords(stringToArr.slice(0, 3).join('')));
            result.push('миллиардов');
            console.log('b case 20-1');
            remainder < 1000 ? result.push(numberToWords(remainder)) : result.push(millionsToWords(remainder));
            console.log('b case 20-2');
        break;

        case stringToArr.length === 12 && Number(stringToArr.slice(0, 3).join('')) % 100 === 0 :
            result.push(numberToWords(Number(stringToArr.slice(0, 3).join(''))));
            result.push('миллиардов');
            console.log('b case 21-1');
            result.push(millionsToWords(remainder));
            console.log('b case 21-2');
        break;
    }

    result = result.join(' ');

return result;    
}



