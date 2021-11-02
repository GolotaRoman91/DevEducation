// ВАЖНО!!! чтобы эта часть кода работала, нужно чтобы был подключен файл functions.js

function returnThousands (number) {
    let stringToArr = String(number).split('');
    // console.log(stringToArr);
    let result = [];
    let returnedNumber = 0;
    let returnedNumberThousands = 0;
    const thousands = ['тысяча', 'тысячи', 'тысяч'];

    switch (true) {
        case stringToArr.length === 4:
            returnedNumberThousands = (String(number).split('').slice(0, 1)).join('');
        break;

        case stringToArr.length === 5:
            returnedNumberThousands = (String(number).split('').slice(0, 2)).join('');
        break;

        case  stringToArr.length === 6:
            returnedNumberThousands = (String(number).split('').slice(0, 3)).join('');
        break; 
    }

    switch (true) {
        case stringToArr.length === 4 && stringToArr[1] === '0':
            returnedNumber = (String(number).split('').slice(2)).join('');
        break;

        case stringToArr.length === 4:
            returnedNumber = (String(number).split('').slice(1)).join('');
        break;

        case stringToArr.length === 5:
            returnedNumber = (String(number).split('').slice(2)).join('');
        break;

        case stringToArr.length === 6:
            returnedNumber = (String(number).split('').slice(3)).join('');
        break;  
    };
    
    console.log(returnedNumberThousands);
    console.log(returnedNumber);
    
    switch (true) {
        case stringToArr.length === 4 && stringToArr[0] === '1':
            result.push(thousands[0])
            console.log('case 1-1');
            result.push(numberToWords(returnedNumber));
            console.log('case 1-2');
        break;
    
        case stringToArr.length === 4 && stringToArr[0] === '2':
            result.push('две');
            console.log('case 2-1');
            result.push(thousands[1]);
            console.log('case 2-2');
            result.push(numberToWords(returnedNumber));
            console.log('case 2-2');
        break;

        case stringToArr.length === 4 && stringToArr[0] === '3' || stringToArr[0] === '4':
            result.push(numberToWords(returnedNumberThousands));
            console.log('case 3-1');
            result.push(thousands[1]);
            console.log('case 3-2');
            result.push(numberToWords(returnedNumber));
            console.log('case 3-3');
        break;

        case stringToArr.length === 4 && Number(stringToArr[0]) > 4:
            result.push(numberToWords(returnedNumberThousands));
            console.log('case 4-1');
            result.push(thousands[2]);
            console.log('case 4-2');
            result.push(numberToWords(returnedNumber));
            console.log('case 4-3');
        break;    

        case stringToArr.length === 5 && returnedNumber === '000':
            result.push(numberToWords(returnedNumberThousands));
            console.log('case 5-1');
            result.push(thousands[2]);
            console.log('case 5-2');
        break;

        case stringToArr.length === 5:
            result.push(numberToWords(returnedNumberThousands));
            console.log('case 6-1');
            result.push(thousands[2]);
            console.log('case 6-2');
            result.push(numberToWords(returnedNumber));
            console.log('case 6-3');
        break;

        case stringToArr.length === 6 && number % 100000 === 0:
            result.push(numberToWords(returnedNumberThousands));
            console.log('case 7-1');
            result.push(thousands[2]);
            console.log('case 7-2');
        break;

        case stringToArr.length === 6 && Number(returnedNumberThousands) % 100 === 0 && Number(returnedNumber) <= 999:
            result.push(numberToWords(returnedNumberThousands));
            console.log('case 8-1');
            result.push(thousands[2]);
            console.log('case 8-2');
            result.push(numberToWords(returnedNumber));
            console.log('case 8-3');
        break;

        case stringToArr.length === 6 && Number(returnedNumberThousands) % 10 === 0 && Number(returnedNumber) <= 999:
            result.push(numberToWords(returnedNumberThousands));
            result.push(thousands[2]);
            console.log('case 9-1');
            result.push(numberToWords(returnedNumber));
            console.log('case 9-2');
        break;

        case stringToArr.length === 6 && Number(returnedNumberThousands) === 101:
            result.push('Сто одна тысяча');
            console.log('case 12-1');
            result.push(numberToWords(returnedNumber));
            console.log('case 12-2');
        break;

        case stringToArr.length === 6 && Number(returnedNumberThousands) === 102:
            result.push('Сто две тысячи');
            console.log('case 13-1');
            result.push(numberToWords(returnedNumber));
            console.log('case 13-2');
        break;

        case stringToArr.length === 6 && Number(returnedNumberThousands) === 101:
            result.push('Сто одна тысяча');
            console.log('case 14-1');
        break;

        case stringToArr.length === 6 && Number(returnedNumberThousands) === 102:
            result.push('Сто две тысячи');
            console.log('case 15-1');
        break;

        case stringToArr.length === 6 && Number(returnedNumberThousands) === 103 || Number(returnedNumberThousands) === 104 :
            result.push(numberToWords(returnedNumberThousands));
            result.push(thousands[1]);
            console.log('case 16-1');
            result.push(numberToWords(returnedNumber));
            console.log('case 16-2');
        break;
        
        case stringToArr.length === 6 && Number(returnedNumberThousands) >= 105 && Number(returnedNumberThousands) <= 120:
            result.push(numberToWords(returnedNumberThousands));
            result.push(thousands[2]);
            console.log('case 16-1');
            result.push(numberToWords(returnedNumber));
            console.log('case 16-2');
        break;

        case stringToArr.length === 6 && Number(returnedNumberThousands) > 120 && Number(returnedNumberThousands) % 10 !== 0 && returnedNumberThousands.split('')[2] === '1':
            returnedNumberThousands = String(returnedNumberThousands).split('');
            returnedNumberThousands[2] = '0';
            returnedNumberThousands = returnedNumberThousands.join('');
            result.push(numberToWords(returnedNumberThousands));
            console.log('case 17-1');
            result.push('одна тысяча');
            console.log('case 17-2');
            result.push(numberToWords(returnedNumber));
            console.log('case 17-3');
        break;    

        case stringToArr.length === 6 && Number(returnedNumberThousands) > 120 && Number(returnedNumberThousands) % 10 !== 0 && returnedNumberThousands.split('')[2] === '2':
            returnedNumberThousands = String(returnedNumberThousands).split('');
            returnedNumberThousands[2] = '0';
            returnedNumberThousands = returnedNumberThousands.join('');
            result.push(numberToWords(returnedNumberThousands));
            console.log('case 17-1');
            result.push('две тысячи');
            console.log('case 17-2');
            result.push(numberToWords(returnedNumber));
            console.log('case 17-3');
        break;
        
        case stringToArr.length === 6 && Number(returnedNumberThousands) > 120 && Number(returnedNumberThousands) % 10 !== 0 && returnedNumberThousands.split('')[2] === '3' || returnedNumberThousands.split('')[2] === '4':
            console.log('case 18-1');
            result.push(numberToWords(returnedNumberThousands));
            result.push(thousands[1])
            console.log('case 18-2');
            result.push(numberToWords(returnedNumber));
            console.log('case 18-3');
        break;
        
        case stringToArr.length === 6 && Number(returnedNumberThousands) > 120 && Number(returnedNumberThousands) % 10 !== 0 && Number(returnedNumberThousands.split('')[2]) >= 5 && Number(returnedNumberThousands.split('')[2]) <= 9:
            console.log('case 19-1');
            result.push(numberToWords(returnedNumberThousands));
            result.push(thousands[2])
            console.log('case 19-2');
            result.push(numberToWords(returnedNumber));
            console.log('case 19-3');
        break;
    }
    
    result = result.join(' ');

return result;
}

// console.log(returnThousands(118536));
