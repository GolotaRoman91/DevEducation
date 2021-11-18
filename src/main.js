const listOfPosts2 = [{id: 1,
    post: 'some post1',
    title: 'title1',
    author: 'Ivanov',
    comments: [
        {
            id: 1.1,
            comment: 'some comment1',
            title: 'title1',
            author: 'Rimus'
        },
        {
            id: 1.2,
            comment: 'some comment2',
            title: 'title2',
            author: 'Uncle'
        }
    ]
 },
 {
     id: 2,
     post: 'some post2',
     author: 'Ivanov',
     comments: [
         {
             id: 2.1,
             comment: 'some comment1',
             title: 'title1',
             author: 'Rimus'
         },
         {
             id: 2.2,
             comment: 'some comment2',
             title: 'title2',
             author: 'Uncle'
         },
         {
             id: 2.3,
             comment: 'some comment3',
             title: 'title3',
             author: 'Rimus'
         }
     ]
 }, 
 {
     id: 3,
     post: 'some post3',
     title: 'title3',
     author: 'Rimus'
 },
 {
     id: 4,
     post: 'some post4',
     title: 'title4',
     author: 'Uncle'
 }
]

// 1. Написать функцию которая проверит сможет ли Вася выдать сдачу всей очереди
function isPossibleToServeTheQueue (queue) {
    let ticketPrice = 25;
    let cassa = 0;
    
    for (item of queue) {
        switch(true) {
            case (item === ticketPrice) :
                cassa += item;
                break;
            case (item > ticketPrice && (item - ticketPrice - cassa) > 0):
                return 'No'
            case (item > ticketPrice && (item - ticketPrice - cassa) < 0):
                cassa += item - ticketPrice;
                break;         
        }
    }
return 'Yes';    
}

const cinemaQueue = [25, 25, 50, 100];
console.log(isPossibleToServeTheQueue(cinemaQueue));

// 2. Напишите функцию, которая получает два бесконечных числа в виде строк. Вы должны вернуть результат суммы этих двух чисел в виде строки. Математическая работа с этими двумя числами недоступна. Не используйте BigInt.
function sumBigNumbers (firstNum, secondNum) {
    const firstToArr = firstNum.split('');
    const secondToArr = secondNum.split('');
    let intermediateArr = [];
    let finalArr = [];
    // Логика выполниться корректно только если массивы будут одинаковой длины, по-этому уравниваем их заполняя в начале нулями тот что короче
    if (firstToArr.length > secondToArr.length) {
        while(secondToArr.length !== firstToArr.length) {
            secondToArr.unshift('0');
        }
    } else if (secondToArr.length > firstToArr.length) {
        while(firstToArr.length !== secondToArr.length) {
            firstToArr.unshift('0');
        }
    }
    
    for (let i = 0; i < firstToArr.length; i++) {
        if (+firstToArr[i] + +secondToArr[i] >= 10) {
            intermediateArr.push(String(+firstToArr[i] + +secondToArr[i])[0]);
            intermediateArr.push(String(+firstToArr[i] + +secondToArr[i])[1]);
        } else {
            intermediateArr.push('0');
            intermediateArr.push(String(+firstToArr[i] + +secondToArr[i]))
        }
    }
    // В конце нужно добавить 0 так как итерация промежуточного массива начинается не с 0 элемента, а с 1, и в результате в конце получается не нужный NaN
    intermediateArr.push('0');
    // Если первый элемент промежуточного массива не является 0 то первые два элемента нужно запишуть и продожить вычисления
    if (intermediateArr[0] !== '0') {
        finalArr.push(intermediateArr[0]);
        finalArr.push(intermediateArr[1]);
        intermediateArr[1] = '0';
    }
    for (let i = 1; i < intermediateArr.length; i ++) {
        finalArr.push(String(+intermediateArr[i] + +intermediateArr[i + 1]))
    }
    // Можно было бы обойтись без этого фильтра массива задавши i + 2 в строке 57, но по непонятным мне причинам если это сделать зависает вкладка, пробовал в браузере Firefox, результат тот-же, вкладка зависает
    finalArr = finalArr.filter((item, index) => index % 2 === 0);
// console.log(firstToArr);
// console.log(secondToArr);
// console.log(intermediateArr);
// console.log(finalArr.join(''));
return String(finalArr.join(''));
}

const firstVeryBigNumber = '75979845698435698746897497569874569837489679537698576980345769807456980745698746577645983745698045769084756';
const secondVeryBigNumber = '6798376375407508975732985734908723490874325897598035387543075430975438753408';
// console.log(sumBigNumbers(firstVeryBigNumber, secondVeryBigNumber));

// 3.Создайте функцию, которая получает два аргумента: первый - это массив объектов, второй - строка (имя автора). Ваша функция должна возвращать количество сообщений с автором из аргумента функции и комментариев с тем же автором.

function getPostsAndCommentsQuantity (listOfPosts, author) {
    let posts = 0;
    let comments = 0;

    for (item of listOfPosts) {
        if (item.author === author) {
            posts++
        }
        if (Object.keys(item).includes('comments')) {
            item.comments.forEach(elem => {
                if (elem.author === author) {
                    comments++
                }
            })
        }
    }

return [posts, comments];
}

// console.log(getPostsAndCommentsQuantity(listOfPosts2, 'Rimus'));

// 4.Напишите функцию кеш

const complexFunction = (arg1, arg2) => arg1 + arg2;

function makeCached() {
    const arr = [];
    return function () {
        if (arr.includes(arguments[0])) return arr;
        arr.push(arguments[0]);
    return arr;
    }
}

const cachedFunc1 = makeCached();
const cachedFunc2 = makeCached();
console.log(cachedFunc1(complexFunction('foo', 'bar')));
console.log(cachedFunc2(complexFunction('bazz', 'wazz')));


