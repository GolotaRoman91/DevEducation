// ВАЖНО!!! чтобы эта часть кода работала, нужно чтобы были подключены файлы functions.js , advansedFunction_thousands.js, advansedFunction_millions.js , advansedFunction_billions.js, advansedFunction_UserInterface.js

function advansedNumberPrint(number) {
    if (isNaN(number)) {
        return alert('Value is not a number, please type the number')
    } 

    switch (true) {
        case number >= 0 && number < 1000:
            return numberToWords(number)

        case  number >= 1000 && number < 1000000:
            return thousandsToWords(number)

        case  number >= 1000000 && number < 1000000000:
            return millionsToWords(number)

        case  number >= 1000000000 && number < 1000000000000:
            return billionssToWords(number)    
    }
}

function randomNumber (min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
return Math.round(rand);
}

function moreRandom (min, max) {
    let number = randomNumber(min, max);
    let length = randomNumber(1, 12);

return String(number).split('').splice(length).join('');
}

// For testing this feature, you can use fuction with genarating random numbers moreRandom(0, 999999999999), or you can type number

console.log('Вводим число(0-999999999999), получаем строку с прописью числа: ' + advansedNumberPrint(moreRandom(0, 999999999999)));
