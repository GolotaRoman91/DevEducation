describe('HW DataTypes, Massives', () => {
    const testArr11 = [4, 5, 6, 10 , 2, 1, 7, 3, 6, 5];
    const testArr12 = [5, 3, 2, -2, 4, 6, 7, 3, 2];
    const testArr13 = [2, 3, 4, 5, 7, 8, 9, 0, 3, 2, 3];
    const testArr51 = [4, 5, 6, 10 , 2, 1, 7, 3];
    const testArr52 = [6, 4, 3, 6, 7, 8, 3, 2, 3];
    const testArr53 = [2, 5, 13, 0, -2 , 7, 8, 1];
    const testArr61 = [1, 2, 3, 4, 5];
    const testArr62 = [0, 9, 8, 7, 6];
    const testArr63 = [-5, -3, -10, -1, -99];
    const testArr71 = [1, 2, 3, 4];
    const testArr72 = [-5, -3, -1, -99];
    const testArr73 = [5, 11, 3, 10];
    const testArr91 = [4, 6, 7, 8, 2, 3, 1];
    const testArr92 = [5, 4, 2, 0, -1, 20, -25];
    const testArr93 = [0, 2, 3, 4, 5, 6, 7, 8, 3, 27, 11];

    describe('This function finds the minimum element of an array', () => {
        it('Try to find minValue of [4, 5, 6, 10 , 2, 1, 7, 3, 6, 5], expect 1', () => {
            expect(minValue(testArr11)).to.equal(1);
        })
        it('Try to find minValue of [5, 3, 2, -2, 4, 6, 7, 3, 2], expect -2', () => {
            expect(minValue(testArr12)).to.equal(-2);
        })
        it('Try to find minValue of [2, 3, 4, 5, 7, 8, 9, 0, 3, 2, 3], expect 0', () => {
            expect(minValue(testArr13)).to.equal(0);
        })
    })
    describe('This function finds the maximum element of an array', () => {
        it('Try to find maxValue of [4, 5, 6, 10 , 2, 1, 7, 3, 6, 5], expect 10', () => {
            expect(maxValue(testArr11)).to.equal(10);
        })
        it('Try to find maxValue of [5, 3, 2, -2, 4, 6, 7, 3, 2], expect 7', () => {
            expect(maxValue(testArr12)).to.equal(7);
        })
        it('Try to find maxValue of [2, 3, 4, 5, 7, 8, 9, 0, 3, 2, 3], expect 9', () => {
            expect(maxValue(testArr13)).to.equal(9);
        })
    })
    describe('This function find index of the minimum element of an array', () => {
        it('Try to find index minvalue of [4, 5, 6, 10 , 2, 1, 7, 3, 6, 5], expect 5', () => {
            expect(indexMinValue(testArr11)).to.equal(5);
        })
        it('Try to find index minvalue of [5, 3, 2, -2, 4, 6, 7, 3, 2], expect 3', () => {
            expect(indexMinValue(testArr12)).to.equal(3);
        })
        it('Try to find index minvalue of [2, 3, 4, 5, 7, 8, 9, 0, 3, 2, 3], expect 7', () => {
            expect(indexMinValue(testArr13)).to.equal(7);
        })
    })
    describe('This function find index of the maximum element of an array', () => {
        it('Try to find index maxvalue of [4, 5, 6, 10 , 2, 1, 7, 3, 6, 5], expect 3', () => {
            expect(indexMaxValue(testArr11)).to.equal(3);
        })
        it('Try to find index maxvalue of [5, 3, 2, -2, 4, 6, 7, 3, 2], expect 6', () => {
            expect(indexMaxValue(testArr12)).to.equal(6);
        })
        it('Try to find index maxvalue of [2, 3, 4, 5, 7, 8, 9, 0, 3, 2, 3], expect 6', () => {
            expect(indexMaxValue(testArr13)).to.equal(6);
        })
    })
    describe('This function calculates the sum of elements with odd indices', () => {
        it('From array [4, 5, 6, 10 , 2, 1, 7, 3, 6, 5], expect 19', () => {
            expect(arraySummNotEven(testArr51)).to.equal(19);
        })
        it('From array [2, 5, 13, 0, -2 , 7, 8, 1], expect 13', () => {
            expect(arraySummNotEven(testArr53)).to.equal(13);
        })
        it('From array [6, 4, 3, 6, 7, 8, 3, 2, 3], expect 20', () => {
            expect(arraySummNotEven(testArr52)).to.equal(20);
        })
    })
    describe('This function reverses the array', () => {
        it('From array [1, 2, 3, 4, 5], expect [5, 4, 3, 2, 1];', () => {
            expect(reverse(testArr61)).to.eql([5, 4, 3, 2, 1]);
        })
        it('From array [0, 9, 8, 7, 6], expect [6, 7, 8, 9, 0];', () => {
            expect(reverse(testArr62)).to.eql([6, 7, 8, 9, 0]);
        })
        it('From array [-5, -3, -10, -1, -99], expect [-99, -1, -10, -3, -5];', () => {
            expect(reverse(testArr63)).to.eql([-99, -1, -10, -3, -5]);
        })
    })
    describe('this function counts the number of odd array elements', () => {
        it('From array [1, 2, 3, 4, 5], expect 9', () => {
            expect(summNotEval(testArr61)).to.equal(9);
        })
        it('From array [0, 9, 8, 7, 6], expect 16', () => {
            expect(summNotEval(testArr62)).to.equal(16);
        })
        it('From array [-5, -3, -10, -1, -99], expect -108', () => {
            expect(summNotEval(testArr63)).to.equal(-108);
        })
    })
    describe('this function swaps the first and second half of the array', () => {
        it('From array [1, 2, 3, 4], expect [3, 4, 1, 2]', () => {
            expect(swapArr(testArr71)).to.eql([3, 4, 1, 2]);
        })
        it('From array [0, 9, 8, 7, 6], expect [-1, -99, -5, -3]', () => {
            expect(swapArr(testArr72)).to.eql([-1, -99, -5, -3]);
        })
        it('From array [-5, -3, -10, -1, -99], expect [3, 10, 5, 11]', () => {
            expect(swapArr(testArr73)).to.eql([3, 10, 5, 11]);
        })
    })
    describe('this function do bubblesort to array', () => {
        it('From array [4, 6, 7, 8, 2, 3, 1], expect [1, 2, 3, 4, 6, 7, 8]', () => {
            expect(bubbleSortArr(testArr91)).to.eql([1, 2, 3, 4, 6, 7, 8]);
        })
        it('From array [5, 4, 2, 0, -1, 20, -25], expect [-25, -1, 0, 2, 4, 5, 20]', () => {
            expect(bubbleSortArr(testArr92)).to.eql([-25, -1, 0, 2, 4, 5, 20]);
        })
        it('From array [0, 2, 3, 4, 5, 6, 7, 8, 3, 27, 11], expect [0, 2, 3, 3, 4, 5, 6, 7, 8, 11, 27]', () => {
            expect(bubbleSortArr(testArr93)).to.eql([0, 2, 3, 3, 4, 5, 6, 7, 8, 11, 27]);
        })
    })
    describe('this function do Select to array', () => {
        it('From array [4, 6, 7, 8, 2, 3, 1], expect [1, 2, 3, 4, 6, 7, 8]', () => {
            expect(selectionSortArr(testArr91)).to.eql([1, 2, 3, 4, 6, 7, 8]);
        })
        it('From array [5, 4, 2, 0, -1, 20, -25], expect [-25, -1, 0, 2, 4, 5, 20]', () => {
            expect(selectionSortArr(testArr92)).to.eql([-25, -1, 0, 2, 4, 5, 20]);
        })
        it('From array [0, 2, 3, 4, 5, 6, 7, 8, 3, 27, 11], expect [0, 2, 3, 3, 4, 5, 6, 7, 8, 11, 27]', () => {
            expect(selectionSortArr(testArr93)).to.eql([0, 2, 3, 3, 4, 5, 6, 7, 8, 11, 27]);
        })
    })
    describe('this function do Insert to array', () => {
        it('From array [4, 6, 7, 8, 2, 3, 1], expect [1, 2, 3, 4, 6, 7, 8]', () => {
            expect(insertionSortArr(testArr91)).to.eql([1, 2, 3, 4, 6, 7, 8]);
        })
        it('From array [5, 4, 2, 0, -1, 20, -25], expect [-25, -1, 0, 2, 4, 5, 20]', () => {
            expect(insertionSortArr(testArr92)).to.eql([-25, -1, 0, 2, 4, 5, 20]);
        })
        it('From array [0, 2, 3, 4, 5, 6, 7, 8, 3, 27, 11], expect [0, 2, 3, 3, 4, 5, 6, 7, 8, 11, 27]', () => {
            expect(insertionSortArr(testArr93)).to.eql([0, 2, 3, 3, 4, 5, 6, 7, 8, 11, 27]);
        })
    })
});