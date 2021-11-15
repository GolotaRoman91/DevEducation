describe('HW DataTypes, cycles', () => {
    describe('The function finds the sum of even numbers in the given range', () => {
        let res1 = [50, 2401];

        it('Finds the sum in diapasone to 99, expect 50, 2401', () => {
            expect(sumAndNumberOfEveNumbers(99)).to.eql(res1)
        })

        let res2 = [25, 625];
        it('Finds the sum in diapasone to 50, expect 25, 625', () => {
            expect(sumAndNumberOfEveNumbers(50)).to.eql(res2)
        })
    })
    describe('This function checking is the number prime', () => {
        it('Checking number 23, expect the result to be true', () => {
            expect(isNumberSimple(23)).to.be.equal(true)
        })
        it('Checking number 4, expect the result to be false', () => {
            expect(isNumberSimple(4)).to.be.equal(false)
        })
        it('Checking number 23 in String, expect the result to be true', () => {
            expect(isNumberSimple('23')).to.be.equal(true)
        })
        it('Checking number 4 in String, expect the result to be false', () => {
            expect(isNumberSimple('4')).to.be.equal(false)
        })
        it('Checking to enter invalid data, try to type letters, exept to error message ', () => {
            expect(isNumberSimple('dfgfdgfd')).to.have.string('Invalid input data, please enter a number')
        })
        it('Checking to enter invalid data, try to type NaN, exept to error message ', () => {
            expect(isNumberSimple(NaN)).to.have.string('Invalid input data, please enter a number')
        })
    })
    describe('This function finds the root of a number with integer precision, sequential search option', () => {
        it('Try to find root of number 25, exept 5', () => {
            expect(rootOfNumberLine(25)).to.equal(5)
        })
        it('Try to find root of number 125, exept 11', () => {
            expect(rootOfNumberLine(125)).to.equal(11)
        })
        it('Сhecking to enter invalid data, try to type letters, exept to error message ', () => {
            expect(rootOfNumberLine('dfgfdgfd')).to.have.string('Invalid input data, please enter a number')
        })
    })
    describe('This function finds the root of a number with integer precision, binary search option', () => {
        it('Try to find root of number 25, exept 5', () => {
            expect(rootOfNumberBinary(25)).to.equal(5)
        })
        it('Try to find root of number 121, exept 11', () => {
            expect(rootOfNumberBinary(121)).to.equal(11)
        })
        it('Сhecking to enter invalid data, try to type letters, exept to error message ', () => {
            expect(rootOfNumberBinary('dfgfdgfd')).to.have.string('Invalid input data, please enter a number')
        })
    })
    describe('This function finds factorial of number', () => {
        it('Try to find factorial of number 7, exept 5040', () => {
            expect(numberFactorial(7)).to.equal(5040)
        })
        it('ry to find factorial of number 10, exept 3628800', () => {
            expect(numberFactorial(10)).to.equal(3628800)
        })
        it('Сhecking to enter invalid data, try to type letters, exept to error message ', () => {
            expect(numberFactorial('dfgfdgfd')).to.have.string('Invalid input data, please enter a number')
        })
        it('Сhecking to enter number less then 0, exept error message', () => {
            expect(numberFactorial(-10)).to.have.string('Invalid input data, please enter a number')
        })
    })
    describe('This function finds the sum of a given number', () => {
        it('Try to find sum of number 123, exept 6', () => {
            expect(summOfNumbers(123)).to.equal(6)
        })
        it('Try to find sum of number 5678, exept 26', () => {
            expect(summOfNumbers(5678)).to.equal(26)
        })
        it('Сhecking to enter number less then 0, exept error message', () => {
            expect(summOfNumbers(-10)).to.have.string('Invalid input data, please enter a number')
        })
    })
    describe('This function is reversed number', () => {
        it('Try to reverse 123, exept 321', () => {
            expect(reverseNumber(123)).to.have.string(321)
        })
        it('Try to reverse 123, exept 567', () => {
            expect(reverseNumber(567)).to.have.string(765)
        })
        it('Сhecking to enter number less then 0, exept error message', () => {
            expect(reverseNumber(-10)).to.have.string('Invalid input data, please enter a number')
        })
    })
})