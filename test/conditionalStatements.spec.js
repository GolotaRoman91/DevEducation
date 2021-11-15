describe('HW DataTypes, conditionalStatements', () => {
    describe('multiplyOrSubtract', () =>  {

        it ('should to return a * b', () => {
            expect(multiplyOrSubtract(2, 5)).to.equal(10);
        })
        it ('should to return a + b', () => {
            expect(multiplyOrSubtract(3, 5)).to.equal(8);
        })
        it ('should to return a + b or a * b, this is dont metter' , () => {
            expect(multiplyOrSubtract(0, 0)).to.equal(0);
        })
        
    })
    
    describe('determineThePositionOfThePoint', () => {
        it ('should to determinate position of the point x = 555, y = 700', () => {
            expect(determineThePositionOfThePoint(555, 700)).to.equal(2);
        })
        it ('should to determinate position of the point x = 900, y = 100', () => {
            expect(determineThePositionOfThePoint(900, 100)).to.equal(4);
        })
        it ('should to determinate position of the point x = 0, y = 1', () => {
            expect(determineThePositionOfThePoint(0, 1)).to.equal(3);
        })
        it ('should to determinate position of the point x = 0, y = 1000', () => {
            expect(determineThePositionOfThePoint(0, 1000)).to.equal(1);
        })
    })

    describe('shold sum of positive numbers', () => {
        it ('should to get sum from only positive numbers a = 1, b = 2, c = 3', () => {
            expect(sumOfPositive(1, 2, 3)).to.equal(6)
        })
        it ('should to get sum from only negative numbers a = -1, b = -2, c = -3', () => {
            expect(sumOfPositive(-1, -2, -3)).to.equal(0)
        })
        it ('should to get sum from negative and positive numbers a = 1, b = -2, c = 3', () => {
            expect(sumOfPositive(1, -2, 3)).to.equal(4)
        })
    })

    describe('should to fold or multiply 3 numbers and add 3', () => {
        it ('should to multiply a = 1, b = 2, c = 3', () => {
            expect(biggerValue(1, 2, 3)).to.equal(9)
        })
        it ('should to sum a = 1, b = 1, c = 1', () => {
            expect(biggerValue(1, 1, 1)).to.equal(6)
        })
        it ('dont metter sum or multiple, becouse all values are 0', () => {
            expect(biggerValue(0, 0, 0)).to.equal(3)
        })
    })

    describe('should to rate student by the score', () => {
        it ('should to return A, by the score of 90 and more', () => {
            expect(ratingDetermination(90)).to.equal('A')
        } )
        it ('should to return B, by the score between 75 and 89', () => {
            expect(ratingDetermination(80)).to.equal('B')
        })
        it ('should to return C, by the score between 60 and 74', () => {
            expect(ratingDetermination(65)).to.equal('C')
        })
        it ('should to return B, by the score between 40 and 59', () => {
            expect(ratingDetermination(44)).to.equal('D')
        })
        it ('should to return E, by the score between 20 and 39', () => {
            expect(ratingDetermination(25)).to.equal('E')
        })
        it ('should to return F, by the score between 0 and 19', () => {
            expect(ratingDetermination(10)).to.equal('F')
        })
        it ('should to return erroe, by the score more then 100', () => {
            expect(ratingDetermination(111)).to.equal('Not valid input, type score between 0 - 100')
        })
        it ('should to return erroe, by the score less then 0', () => {
            expect(ratingDetermination(-10)).to.equal('Not valid input, type score between 0 - 100')
        })
    })
})

