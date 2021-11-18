describe('HW Closures', () => {
    describe('This function checks if there will be change for the whole queue', () => {
        it('should return Yes from queue [25, 25, 50, 100]', () => {
            expect(isPossibleToServeTheQueue([25, 25, 50, 100])).to.have.string('Yes');
        })
        it('should return Yes from queue [25, 25, 50]', () => {
            expect(isPossibleToServeTheQueue([25, 25, 50])).to.have.string('Yes');
        })
        it('should return No from queue [25, 100]', () => {
            expect(isPossibleToServeTheQueue([25, 100])).to.have.string('No');
        })
        it('should return No from queue [25, 50, 100]', () => {
            expect(isPossibleToServeTheQueue([25, 50, 100])).to.have.string('No');
        })
    })
    describe('This function adds two infinitely large numbers as strings', () => {
        const firstVeryBigNumber = '75979845698435698746897497569874569837489679537698576980345769807456980745698746577645983745698045769084756';
        const secondVeryBigNumber = '6798376375407508975732985734908723490874325897598035387543075430975438753408';
        it('First attempt to add two very large numbers different lengths', () => {
            expect(sumBigNumbers(firstVeryBigNumber, secondVeryBigNumber)).to.have.string('759798456984356987468974975698813682138650870466743099660710678530947855071596344612103352682112810211107838164');
        })
        it('Try to add 0 at same strings different lengths', () => {
            expect(sumBigNumbers('0', '000')).to.have.string('000');
        })
        it('Another string with very big numbers', () => {
            expect(sumBigNumbers('123432543654456', '543345234234234')).to.have.string('666777777888690');
        })
    })
    describe('This function counts the number of posts and comments by author name', () => {
        it('Try to find by author name Rimus, exept to 1 post and 3 comments', () => {
            expect(getPostsAndCommentsQuantity(listOfPosts2, 'Rimus')).to.be.eql([1, 3]);
        })
        it('Try to find by author name Rimus, exept to 2 post and 0 comments', () => {
            expect(getPostsAndCommentsQuantity(listOfPosts2, 'Ivanov')).to.be.eql([2, 0]);
        })
        it('Try to find by author name Rimus, exept to 1 post and 2 comments', () => {
            expect(getPostsAndCommentsQuantity(listOfPosts2, 'Uncle')).to.be.eql([1, 2]);
        })
    })
})