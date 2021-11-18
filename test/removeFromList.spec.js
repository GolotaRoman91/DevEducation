// Тест не проходит, тут я пытаюсь замокать данные которые беруться из глобальной
// глобальной области видимости, как протестировать такой код не знаю, функцтт ничего не возващают,
// а меняют UI.
describe('removeFromList', () => {
    describe('Testing the addition of an attribute hidden on an element', () => {
        let remove;
        const toLocalStorage = () => { };
        let event;

        beforeEach(() => {
            event = {
                target: {
                    setAttribute: (a, b) => {
                        this[a] = b
                    }
                }
            }
        })

        afterEach(() => {
            delete event;
            delete remove;
        })

        it('should hide element if Done filter active', () => {
            remove = {
                id : 'Done'
            }
            removeFromList(event);
            expect(event.target['hidden']).to.be('hidden')
        })

        it('should not hide element if Done filter active', () => {
            remove = {
                id : 'SomeId'
            }
            removeFromList(event);
            expect(event.target['hidden']).not.be('hidden')
        })
    })
})