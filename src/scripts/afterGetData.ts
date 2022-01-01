type DogsPictures = {
    message: Array<string>,
    status: string
}

export function actionAfterGetData (data: DogsPictures) {
    const maxMinValue = 30;
    const maxMaxValue = 36;

    (function pagination () {
        const images: HTMLImageElement = document.querySelector('.images')!;
        const buttons: HTMLButtonElement = document.querySelector('.buttons')!;
        const nextButton: HTMLButtonElement = document.querySelector('.button_prev')!;
        const prevButton: HTMLButtonElement = document.querySelector('.prev_next')!;
        const minStart = 0;
        const maxStart = 6;
        const step = 6;
        let paginationCase = 0;
        const pituresQuantity = data.message.length;
           
        buttons.innerHTML = `<button class='button_prev'>Prev</button>`;
        buttons.innerHTML += `<button class='pagination'>1</button>`;

        nextButton.setAttribute('disabled', 'disabled');
        for (let i = 2; i <= Math.ceil(pituresQuantity / step); i++) {
            buttons.innerHTML += `<button class='pagination'>${i}</button>`
        }
        buttons.innerHTML += `<button class='button_next'>Next</button>`;
        const btns = document.querySelectorAll('button');

        btns.forEach(function(btn):void {
            btn.addEventListener('click', function(evt: MouseEvent): void {
                if (!evt.target) {
                    return
                }
                const target = evt.target as HTMLButtonElement;
                const textContent = Number(target.textContent);
                if (target.className  === 'pagination') {
                    switch (true) {
                        case (textContent === 1) :
                            images.innerHTML = '';
                            paginationCase = textContent;
                            nextButton.setAttribute('disabled', 'disabled');
                        for (let item of data.message.slice(minStart, maxStart)) {
                            images.innerHTML += `<img class='picture' align="center" src= ${item}>`
                        };
                        break;

                        case (textContent === 6) :
                            nextButton.setAttribute('disabled', 'disabled');
                        break; 

                        case (textContent !== 1) :
                            prevButton.removeAttribute('disabled');
                            nextButton.removeAttribute('disabled');
                            images.innerHTML = '';
                            paginationCase = textContent;
                        for (let item of data.message.slice(minStart + (step * (textContent - 1)) , maxStart + (step * (textContent - 1)))) {
                            images.innerHTML += `<img class='picture' align="center" src= ${item}>`
                        };
                        break;
                    }
                }
            })
        })

        function renderPicturesDown () {
            const nextButton: HTMLButtonElement = document.querySelector('.button_next')!;
            const prevButton: HTMLButtonElement = document.querySelector('.prev_next')!;
            if (paginationCase >= 0) {
                images.innerHTML = '';
                for (let item of data.message.slice(minStart + (step * (paginationCase)) , maxStart + (step * (paginationCase)))) {
                    images.innerHTML += `<img class='picture' align="center" src= ${item}>`;
                };
                paginationCase -= 1;
            }
            if (paginationCase === 1) {
                prevButton.setAttribute('disabled', 'disabled');
            }
            if (paginationCase !== 6) {
                nextButton.removeAttribute('disabled');
            }
        };

        function renderPicturesUp () {
            const nextButton: HTMLButtonElement = document.querySelector('.button_next')!;
            const prevButton: HTMLButtonElement = document.querySelector('.button_prev')!;
            if ((minStart * paginationCase < maxMinValue) && (maxStart * paginationCase < maxMaxValue)) {
                images.innerHTML = '';
                        for (let item of data.message.slice(minStart + (step * (paginationCase)) , maxStart + (step * (paginationCase)))) {
                    images.innerHTML += `<img class='picture' align="center" src= ${item}>`;
                };
                (paginationCase >= 0) ? paginationCase += 1 : paginationCase += 2;
            }
            if (paginationCase > 1) {
                prevButton.removeAttribute('disabled');
                nextButton.removeAttribute('disabled');
            }
            if (paginationCase === 6) {
                nextButton.setAttribute('disabled', 'disabled');
            }
            nextButton.addEventListener('click', renderPicturesUp);
            prevButton.addEventListener('click', renderPicturesDown);
        };

    renderPicturesUp ();
   }());
}
