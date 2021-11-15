describe('HW DataTypes, functions', () => {
    describe('This function returns the string name of the day of the week by day number', () => {
        it('7 may retuen Sunday', () => {
            expect(day(7)).to.have.string('Sunday')
        })
        it('1 may retuen Monday', () => {
            expect(day(1)).to.have.string('Monday')
        })
        it('3 may retuen Wednesday', () => {
            expect(day(3)).to.have.string('Wednesday')
        })
    })
    describe('The function finds the distance between points in two-dimensional cartesian space', () => {
        it('[100, 100], [200, 200], exept to 141', () => {
            expect(findDistance([100, 100], [200, 200])).to.be.equal(141)
        })
        it('[245, 284], [123, 267], exept to 123', () => {
            expect(findDistance([245, 284], [123, 267])).to.be.equal(123)
        })
        it('[629, 311], [534, 222], exept to 130', () => {
            expect(findDistance([629, 311], [534, 222])).to.be.equal(130)
        })
    })
    describe('The function outputs the specified number in words', () => {
        it('320 expect to триста двадцать', () => {
            expect(numberToWords(320)).to.have.string('триста двадцать');
        })
        it('0 expect to ноль', () => {
            expect(numberToWords(0)).to.have.string('ноль');
        })
        it('999 expect to девятьсот девяносто девять', () => {
            expect(numberToWords(999)).to.have.string('девятьсот девяносто девять');
        })
    })
    describe('The function displays the number specified in words', () => {
        it('триста двадцать expect to 320', () => {
            expect(wordsToNumber('триста двадцать')).to.be.equal(320);
        })
        it('ноль expect to 0', () => {
            expect(wordsToNumber('ноль')).to.be.equal(0);
        })
        it('девятьсот девяносто девять expect to 999', () => {
            expect(wordsToNumber('девятьсот девяносто девять')).to.be.equal(999);
        })
    })
})