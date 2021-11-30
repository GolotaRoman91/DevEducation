function actionAfterGetData (data) {
    const maxMinValue = 30;
    const maxMaxValue = 36;

    (function pagination () {
        const images = document.querySelector('.images');
        const minStart = 0;
        const maxStart = 6;
        const step = 6;
        let paginationCase = 0;
        const pituresQuantity = data.message.length;
        let buttons = document.querySelector('.buttons');
        
        buttons.innerHTML = `<button class='button_prev'>Prev</button>`;
        buttons.innerHTML += `<button class='pagination'>1</button>`;
        document.querySelector('.button_prev').setAttribute('disabled', 'disabled');
        for (let i = 2; i <= Math.ceil(pituresQuantity / step); i++) {
            buttons.innerHTML += `<button class='pagination'>${i}</button>`
        }
        buttons.innerHTML += `<button class='button_next'>Next</button>`;
        const btns = document.querySelectorAll('button');

        btns.forEach(function(btn) {
            btn.addEventListener('click', function(evt) {
                if (evt.target.className === 'pagination') {
                    switch (true) {
                        case (evt.target.textContent === '1') :
                            images.innerHTML = '';
                            paginationCase = +evt.target.textContent;
                            document.querySelector('.button_prev').setAttribute('disabled', 'disabled');
                        for (item of data.message.slice(minStart, maxStart)) {
                            images.innerHTML += `<img class='picture' align="center" src= ${item}>`
                        };
                        break;

                        case (evt.target.textContent === '6') :
                                document.querySelector('.button_next').setAttribute('disabled', 'disabled');
                        break; 

                        case (evt.target.textContent !== '1') :
                            document.querySelector('.button_prev').removeAttribute('disabled', 'disabled');
                            document.querySelector('.button_next').removeAttribute('disabled', 'disabled');
                            images.innerHTML = '';
                            paginationCase = +evt.target.textContent;
                        for (item of data.message.slice(minStart + (step * (evt.target.textContent - 1)) , maxStart + (step * (evt.target.textContent - 1)))) {
                            images.innerHTML += `<img class='picture' align="center" src= ${item}>`
                        };
                        break;
                    }
                }
            })
        })

        function renderPicturesUp () {
            if ((minStart * paginationCase < maxMinValue) && (maxStart * paginationCase < maxMaxValue)) {
                images.innerHTML = '';
                        for (item of data.message.slice(minStart + (step * (paginationCase)) , maxStart + (step * (paginationCase)))) {
                    images.innerHTML += `<img class='picture' align="center" src= ${item}>`;
                };
                (paginationCase >= 0) ? paginationCase += 1 : paginationCase += 2;
            }
            if (paginationCase > 1) {
                document.querySelector('.button_prev').removeAttribute('disabled', 'disabled');
                document.querySelector('.button_next').removeAttribute('disabled', 'disabled');
            }
            if (paginationCase === 6) {
                document.querySelector('.button_next').setAttribute('disabled', 'disabled');
            }
        };

        function renderPicturesDown () {
            if (paginationCase >= 0) {
                images.innerHTML = '';
                for (item of data.message.slice(minStart + (step * (paginationCase)) , maxStart + (step * (paginationCase)))) {
                    images.innerHTML += `<img class='picture' align="center" src= ${item}>`;
                };
                paginationCase -= 1;
            }
            if (paginationCase === 1) {
                document.querySelector('.button_prev').setAttribute('disabled', 'disabled');
            }
            if (paginationCase !== 6) {
                document.querySelector('.button_next').removeAttribute('disabled', 'disabled');
            }
        };

    renderPicturesUp ();

    document.querySelector('.button_next').addEventListener('click', renderPicturesUp);
    document.querySelector('.button_prev').addEventListener('click', renderPicturesDown);
    images.addEventListener('click', getPictureBig);    
    }());
}
