// 1. Если а – четное посчитать а*б, иначе а+б;

const multiplyOrSubtract = (a, b) => (a % 2 === 0) ? a * b : a + b;
console.log('Если а – четное, возвращаем а*б, иначе а+б ' + multiplyOrSubtract(2, 3)); // 7;


// 2. Определить какой четверти принадлежит точка с координатами (х,у);

function determineThePositionOfThePoint (x, y) {

    // Находим середину документа
    const midpoint = [document.documentElement.clientWidth / 2 , document.documentElement.clientHeight / 2];

    let result = 0;

    switch (true) {
        case x > midpoint[0] && y > midpoint[1]:
            result = 2;
            break;

        case x > midpoint[0] && y < midpoint[1]:
            result = 4;
            break;
            
        case x < midpoint[0] && y > midpoint[1]:
            result = 1;
            break;

        case x < midpoint[0] && y < midpoint[1]:
            result = 3;
            break;      
    }

// Вернём результат    
return result;    
}

console.log('Определяем какой четверти принадлежит точка с координатами (х,у) ' + determineThePositionOfThePoint(555, 700)); // 3;


// 3. Найти суммы только положительных из трех чисел;

// function sumOfPositive (a, b, c) {
    
//     const result = Array.from(arguments).filter(argument => argument > 0).reduce((accum, current) => accum + current);

// return result;    
// }

function sumOfPositive (a, b, c) {
    let res = 0;
    let arrgs = Array.from(arguments);

    for (let i = 0; i < 3; i++) {
        if (arrgs[i] > 0) {
            res += arrgs[i]
        }
    }

return res;    
}

console.log('Здесь мы находим сумму только положительных чисел ' + sumOfPositive(1, -2, 4)); // 5;


// 4. Посчитать выражение (макс(а*б*с, а+б+с))+3

function biggerValue (a, b, c) {
    let x = (a * b * c);
    let y = (a + b + c);
    
    return x > y ? x + 3 : y + 3;
}

// console.log(biggerValue(1, 1, 1)); //6

// 5. Написать программу определения оценки студента по его рейтингу, на основе следующих правил

function ratingDetermination (rating) {
    let result = '';

    switch (true) {
        case rating >= 0 && rating <= 19:
            rating = 'F';
            break;

        case rating >= 20 && rating <= 39:
            rating = 'E';
            break;
            
        case rating >= 40 && rating <= 59:
            rating = 'D';
            break;
            
        case rating >= 60 && rating <= 74:
            rating = 'C';
            break; 
            
        case rating >= 75 && rating <= 89:
            rating = 'B';
            break;
            
        case rating >= 90 && rating <= 100:
            rating = 'A';
            break;    
    }   

return  result;   
}

console.log('Определяем оценку студента по его рейтингу ' + ratingDetermination(90)); // A;

