// 1.Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц.
function getCookingTime (eggsAmount) {
    let result = eggsAmount / 5 ;

    if (Number.isInteger(result)) {
        return result * 5
    } else 
    result < 1 ? result = 5 : result = (Math.floor(result) * 5) + 5;
return result    
}

// Для тестирования функции следует менять переменную eggs 
const eggs = 11;
console.log(`Для приготовления ${eggs} яиц нужно ${getCookingTime(eggs)} минут`);

// 2.Получая массив чисел. Все они либо нечетные, либо четные, кроме одного. Тебе нужно его найти.

function getNumber (array) {
    let evenNumbers = 0; 
    let notEvenNumbers = 0;
    let message = '';
    
    array.forEach(num => num % 2 === 0 ? evenNumbers++ : notEvenNumbers++);
return evenNumbers === 1 ? message = 'Этот массив содержит чётное число: ' + array.filter(num => num % 2 === 0) : message = 'Этот массив содержит не чётное число: ' + array.filter(num => num % 2 !== 0);
}

console.log(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]));
console.log(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12]));

// 3.Принимая массив объектов и случайную строку. У объектов может быть ключ: «title» с разными значениями. Создайте алгоритм, который
// фильтрует массив, заданный как первый параметр, и возвращает
// массив объектов, которые содержат в своих заголовках заданную строку
// в качестве второго параметра (без учета регистра).

const testArr3 = [{
    title: 'Some title'
    }, 
    {
    title: 'I like JS'
    },
    {
    user: 'This obj doesn\’t have key title js'
    }, 
    {
    title: 'Js - is the best!'
    }];

function findTitle(array, string) {
    const result = [];
    const toLowerArr = JSON.parse((JSON.stringify(array)).toLowerCase());

    toLowerArr.forEach(item => {
         if (String(Object.keys(item)) === 'title' && (String(Object.values(item))).includes(string.toLowerCase())) {
            result.push(item)
         }
    })
return result
}

console.log(findTitle(testArr3, 'JS'));

// 4. Принимая строку, ваша функция должна вернуть обьект, в котором
// ключи – символы строки, значение – количество повторений символов в
// строке

function countCharacters(string) {
    const result = {};
    const strToArr = string.split('');

    strToArr.forEach(item => {
        result[item] = (strToArr.filter(elem => elem === item).length);
    })
return result    
}

console.log(countCharacters('11112222255554444'));

// 5. Принимая число, ваша функция должна найти следующий
// положительный палиндром большего размера.
// Палиндром - это слово, фраза, число или другая последовательность
// символов, которая читается так же, как вперед и назад, например,
// «мадам».

// Вспомогательная функция, которая проверяет, является ли число полиндромом
const isPolindrome = number => String(number) === (String(number).split('').reverse().join(''));

function getNextPalindrome(num) {
    let result = num;
    
    if (num - 1 < 9) {
        return 'Input incorrect, please put two-digit number';
    }
        
    while (!(isPolindrome(result + 1))) {
        result++
    }

return result + 1  
}

// Для тестирования этой функции следует менять переменную number
const number = 10;

console.log(`После числа ${number} следующий полиндром это ${getNextPalindrome(number)}`);

// 6. Создать структуру данных Set, используя объект, создать методы add, remove, has

function mySet (arr) {
    let res = [];
    const entri = Object.entries(arr);

    entri.forEach(item => {
        res.includes(item[1]) ? false : res.push(item[1])
    })

    res = res.reduce((acc, item, index) => {
        acc[index + 1] = item
    return acc
    }, {}) 

    // Метод has
    res.has = function (val) {
        return Boolean((Object.values(res)).includes(val))
    }

    // Метод add
    res.add = function (val) {
        if (!(Object.values(res).includes(val))) {
            res[val] = val
        } else {
            return(`Error : Value ${val} alredy exist`)
        }
    }
    
    // Метод delete
    res.delete = function (val) {
        if (Object.values(res).includes(val)) {
            delete res[val]
        } else {
            return(`Error : Value ${val} does not exist`)
        }
    }
return res    
}

const testArr6 = (mySet([1, 2, 3, 4, 1, 2, 5, 6, 2, 3, 1, 6, 4, 3, 2, 7]));
console.log(testArr6);
// console.log(testArr6.add(10));
// console.log(testArr6);
// console.log(testArr6.add(1));
// console.log(testArr6);
// console.log(testArr6.remuve(5));
// console.log(testArr6);
// console.log(testArr6.delete(123));
// console.log(testArr6);
// console.log(testArr6.has(3));
// console.log(testArr6.has(111));
