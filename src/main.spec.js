describe('HW Objects', () => {

    const testObj61 = {
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        add: [],
        has: [],
        delete: []
    }    
    // 1
    describe('This function counts how long it takes to cook eggs.', () => {
        it ('From 11 eggs may return 15' , () => {
            expect(getCookingTime(11)).to.equal(15);
        })
        it ('From 5 eggs may return 5' , () => {
            expect(getCookingTime(5)).to.equal(5);
        })
        it ('From 4 eggs may return 5' , () => {
            expect(getCookingTime(4)).to.equal(5);
        })
        it ('From 16 eggs may return 20' , () => {
            expect(getCookingTime(16)).to.equal(20);
        })
        it ('From 1 eggs may return 5' , () => {
            expect(getCookingTime(1)).to.equal(5);
        })
    })
    // 2
    describe('This function finds an even or not even number in an array and returns it', () => {
        it('Now await from result 4', () => {
            expect(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])).to.equal('Этот массив содержит чётное число: 4');
        })
        it('Now await from result 13', () => {
            expect(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])).to.equal('Этот массив содержит не чётное число: 13');
        })
    })
    // 3
    describe('This function returns an object that matches the search criteria', () => {
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
        it('Now put keyword JS await from result [{title: "i like js"}, {title: js - is the best!}]', () => {
            expect(findTitle(testArr3, 'JS')).to.eql([{title: "i like js"}, {title: 'js - is the best!'}]);
        })
        it('Now put keyword Like await from result [{title: "i like js"}]', () => {
            expect(findTitle(testArr3, 'Like')).to.eql([ { title: 'i like js' } ]);
        })
        it('Now put keyword some await from result [{title: some title}]', () => {
            expect(findTitle(testArr3, 'some')).to.eql([ { title: 'some title' } ]);
        })

    })
    // 4
    describe('The function returns an object with elements and their number', () => {
        it('From 11112222255554444 await to {1: 4, 2: 5, 4: 4, 5: 4}', () => {
            expect(countCharacters('11112222255554444')).to.eql({1: 4, 2: 5, 4: 4, 5: 4});
        })
        it('From aasjfngjssjbb await to {a: 2, s: 3, j: 3, f: 1, n: 1, g: 1, b: 2}', () => {
            expect(countCharacters('aasjfngjssjbb')).to.eql({a: 2, s: 3, j: 3, f: 1, n: 1, g: 1, b: 2});
        })
        it('From 023fsdass0b3gf23sdfdskl11 await to ', () => {
            expect(countCharacters('023fsdass0b3gf23sdfdskl11')).to.eql({'0': 2,
            '1': 2,
            '2': 2,
            '3': 3,
            f: 3,
            s: 5,
            d: 3,
            a: 1,
            b: 1,
            g: 1,
            k: 1,
            l: 1});
        })
    })
    // 5
    describe('This function returns the next polyindrome after a given number', () => {
        it('If the number is 10, the expected result is 11', () => {
            expect(getNextPalindrome(10)).to.equal(11)
        })
        it('Try to pu one-digit number, exept to error', () => {
            expect(getNextPalindrome(1)).to.have.string('Input incorrect, please put two-digit number')
        })
        it('If the number is 25, the expected result is 33', () => {
            expect(getNextPalindrome(25)).to.equal(33)
        })
    })
    // 6

    // В этом тесте не удается протестировать корректно объект с методами, видит это как [ Function ], но передать в тест это значение не удается
    describe('Create a Set data structure using an object, create add, remove, has methods.', () => {
        it('transfer - 5, new set', () => {
            expect(mySet([1, 3, 3, 3, 2])).to.eql({ '1': 1,
                '2': 3,
                '3': 2,
                add: [],
                has: [],
                delete: [] });
        });
        it('transfer - 3, add', () => {
            expect(mySet([1, 3, 3, 3, 2]).add(3)).to.equal('3 already in Set');
        });
        it('transfer - 4, add', () => {
            expect(mySet([1, 3, 3, 3, 2]).add(4)).to.equal();
        });
        it('transfer - 4, has', () => {
            expect(mySet(([1, 3, 3, 3, 2 , 4])).has(4)).to.equal(true);
        });
        it('transfer - 3, delete', () => {
            expect(mySet(([1, 3, 3, 3, 2 , 4])).delete(3)).to.equal(undefined);
        });
    })
})