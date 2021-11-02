// 1. Получить строковое название дня недели по номеру дня.

function day (dayNum) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
return  days[dayNum - 1];   
}

console.log('Получаем строковое название дня недели по номеру дня ' + day(7));// Sunday;

// 2. Найти расстояние между двумя точками в двухмерном декартовом пространстве.

// AB = √(xb - xa)2 + (yb - ya)2
const findDistance = (a, b) => Math.sqrt(Math.pow(b[0] - a[0] ,2) + (Math.pow(b[1] - a[1] ,2)));

console.log('Находим расстояние между двумя точками в двухмерном декартовом пространстве ' + findDistance([100, 100], [200, 200])); // 141;

// 3. Вводим число(0-999), получаем строку с прописью числа.

function numberToWords (number) {
    const single = ['ноль' ,'один', 'два', 'три', 'четыри', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    const intermediate = ['одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семьнадцать', 'восемнадцать', 'девятнадцать'];
    const tens = ['десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    const hundreds = ['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

    let stringToArr = String(number).split('');
    let result = [];
    
    switch(true) {
        case stringToArr.length === 3 && number % 100 === 0:
                result.push(hundreds[stringToArr[0] - 1]);
            break;

        case stringToArr.length === 3 && number % 10 === 0:
                result.push(hundreds[stringToArr[0] - 1]);
                result.push(tens[stringToArr[1] - 1]);
            break;  

        case stringToArr.length === 3 && stringToArr[1] === '1':
                result.push(hundreds[stringToArr[0] - 1]);
                result.push(intermediate[stringToArr[2] - 1]);
            break; 

        case stringToArr.length === 3:
                result.push(hundreds[stringToArr[0] - 1]);
                result.push(tens[stringToArr[1] - 1]);
                result.push(single[stringToArr[2]]);
            break;

        case stringToArr.length === 2 && number >= 11 && number <= 19:
                result.push(intermediate[stringToArr[1] - 1]);
            break;

        case stringToArr.length === 2 && stringToArr[1] === '0':
                result.push(tens[stringToArr[0] - 1]);
            break;

        case stringToArr.length === 2:
                result.push(tens[stringToArr[0] - 1]);
                result.push(single[stringToArr[1]]);
            break;
            
        case stringToArr.length === 1:
                result.push(single[stringToArr[0]]);
            break;
    }

    result = result.join(' ');

return result;
}

console.log('Вводим число(0-999), получаем строку с прописью числа ' + numberToWords(320));

// 4. Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число

function wordsToNumber (words) {
    const numbers = ['0' ,'1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const intermediateNum = ['11', '12', '13', '14', '15', '16', '17', '18', '19'];

    const singleStr = ['ноль' ,'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    const tensStr = ['десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    const intermediateStr = ['одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семьнадцать', 'восемнадцать', 'девятнадцать'];
    const hundredsStr = ['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

    let stringToArr = String(words).split(' ');
    let result = [];

    switch (true) {
        case stringToArr.length === 3:
            result.push(numbers[hundredsStr.indexOf(stringToArr[0]) + 1]);
            result.push(numbers[tensStr.indexOf(stringToArr[1]) + 1]);
            result.push(numbers[singleStr.indexOf(stringToArr[2])]);
            break;

        case stringToArr.length === 2 && intermediateStr.includes(stringToArr[1]):
            result.push(numbers[hundredsStr.indexOf(stringToArr[0]) + 1]);
            result.push(intermediateNum[intermediateStr.indexOf(stringToArr[1])]);
            break;

        case stringToArr.length === 2 && hundredsStr.includes(stringToArr[0]) && singleStr.includes(stringToArr[1]):
            result.push(numbers[hundredsStr.indexOf(stringToArr[0]) + 1]);
            result.push('0');
            result.push(numbers[singleStr.indexOf(stringToArr[1])]);
            break;

        case stringToArr.length === 2 && tensStr.includes(stringToArr[1]):
            result.push(numbers[hundredsStr.indexOf(stringToArr[0]) + 1]);
            result.push(numbers[tensStr.indexOf(stringToArr[1]) + 1]);
            result.push('0');
            break;
            
        case  words === 'сто':
            result.push('100');
            break;

        case stringToArr.length === 2 && tensStr.includes(stringToArr[0]) && singleStr.includes(stringToArr[1]):
            result.push(numbers[tensStr.indexOf(stringToArr[0]) + 1]);
            result.push(numbers[singleStr.indexOf(stringToArr[1])]);
            break;
            
        case stringToArr.length === 1 && tensStr.includes(stringToArr[0]):
            result.push(numbers[tensStr.indexOf(stringToArr[0]) + 1]);
            
            result.push('0');
            break;

        case stringToArr.length === 1 && intermediateStr.includes(stringToArr[0]):
            result.push(intermediateNum[intermediateStr.indexOf(stringToArr[0])]);
            break;
            
        case stringToArr.length === 1 && singleStr.includes(stringToArr[0]):
            result.push(numbers[singleStr.indexOf(stringToArr[0])]);
            break;    
    }
    result = result.join('');

return result;
}

console.log('Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число ' + wordsToNumber('семьдесят один')); //8