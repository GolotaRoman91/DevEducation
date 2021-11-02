// 1. Найти минимальный элемент массива
// const minValue = numbers => numbers.sort((a, b) => a - b)[0];

function minValue (numbers) {
    let result = 0;
    let min = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
    
        if (numbers[i] < min) {
            min = numbers[i];
        }
        result = min;
    }

return result;    
}
console.log('Находим минимальный элемент массива ' + minValue([4, 5, 6, 10 , 2, 1, 7, 3, 6, 5])); // 1;

// 2. Найти максимальный элемент массива
// const maxValue = numbers => numbers.sort((a, b) => b - a)[0];

function maxValue (numbers) {
    let result = 0;
    let max = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
    
        if (numbers[i] > max) {
            max = numbers[i];
        }
        result = max;
    }

return result;    
}


console.log('Находим максимальный элемент массива ' + maxValue([4, 5, 6, 10 , 2, 1, 7, 3])); // 10;

// 3. Найти индекс минимального элемента массива
// const indexMinValue = (numbers) => numbers.indexOf(numbers.slice().sort((a, b) => a - b)[0]);

function indexMinValue (numbers) {
    let result = 0;
    let min = numbers[0];
    let minIndex = 0;

    for (let i = 0; i < numbers.length; i++) {
    
        if (numbers[i] < min) {
            min = numbers[i];
            minIndex = i;
        }
        result = minIndex;
    }

return result;    
}

console.log('Находим индекс минимального элемента массива ' + indexMinValue([4, 5, 6, 10 , 2, 1, 7, 3])); // 5;

// 4. Найти индекс максимального элемента массива
// const indexMaxValue = (numbers) => numbers.indexOf(numbers.slice().sort((a, b) => b - a)[0]);

function indexMaxValue (numbers) {
    let result = 0;
    let max = numbers[0];
    let maxIndex = 0;

    for (let i = 0; i < numbers.length; i++) {
    
        if (numbers[i] > max) {
            max = numbers[i];
            maxIndex = i;
        }
        result = maxIndex;
    }

return result; 
}

console.log('Находим индекс максимального элемента массива ' + indexMaxValue([4, 5, 6, 10 , 2, 1, 7, 3])); // 3;

// 5. Посчитать сумму элементов массива с нечетными индексами

function arraySummNotEven (numbers) {
    let summ = 0;

    for (number in numbers) {
        if (number % 2 !== 0) {
            summ += numbers[number]
        } 
    }
return  summ;   
}

console.log('Находим сумму элементов массива с нечетными индексами ' + arraySummNotEven([4, 5, 6, 10 , 2, 1, 7, 3])); //19;

// 6. Сделать реверс массива (массив в обратном направлении)

// const reverse = array => array.reverse();

function reverse (number) {
    let result = [];
    let numberToArr = String(number).split(',');

    for (let i = numberToArr.length - 1 , k = 0; i >= 0; i--, k++) {
        result[k] = numberToArr[i]
    }

return result;
}
console.log('Реверс массива ' + reverse([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1];

// Посчитать количество нечетных элементов массива

function summNotEval (numbers) {
    let summ = 0;

    for (number of numbers) {
        if (number % 2 !== 0) {
            summ += number
        }  
    }
return summ;    
}

console.log('Количество нечетных элементов массива ' + summNotEval([1, 2, 3, 4, 5])); // 9;

// 7. Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2

function swapArr (numbers) {

    for (let i = 0; i < Math.floor(numbers.length / 2); i++) {
        let temp = numbers[i];
        numbers[i] = Math.ceil(numbers[numbers.length / 2 + i]);
        numbers[numbers.length / 2 + i] = temp; 
    }

return  numbers;       
}

console.log('Меняем местами первую и вторую половину массива ' + swapArr([1, 2, 3, 4])); // [3, 4, 1, 2];

// 8. Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))

function bubbleSortArr(arr) {

    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }
return  arr; 
}  

console.log('Сортируем массив пузырьком (Bubble) ' + bubbleSortArr([4, 6, 7, 8, 2, 3, 1])); // [1, 2, 3, 4, 6, 7, 8];

function selectionSortArr (arr) {
    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
        let indexMin = i;
        for (let j = i + 1; j < l; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }
return arr;
};

console.log('Сортируем массив выбором (Select) ' + selectionSortArr([4, 6, 7, 8, 2, 3, 1])); // [1, 2, 3, 4, 6, 7, 8];

function insertionSortArr (arr) {
    for (let i = 1, l = arr.length; i < l; i++) {
        const current = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = current;
    }
return arr;
};

console.log('Сортируем массив вставками (Insert) ' + insertionSortArr([4, 6, 7, 8, 2, 3, 1])); // [1, 2, 3, 4, 6, 7, 8];

