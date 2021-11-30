const images = document.querySelector('.images');

function getPictureBig(evt) {
    evt.preventDefault()
    const popup = document.querySelector('.popup_hidden');
    const hiddenPicture = document.querySelector('.hidden_img');
    const closeButton = document.querySelector('.popup_close');
    hiddenPicture.src = evt.target.src;
    popup.className = 'popup_show';
    closeButton.addEventListener('click', closeBigPicture)
}

function closeBigPicture (evt) {
    evt.preventDefault()
    const popup = document.querySelector('.popup_show');
    popup.className = 'popup_hidden';
}

function closeByButton (evt) {
    if (evt.key === 'Escape') {
        evt.preventDefault()
        const popup = document.querySelector('.popup_show');
        popup.className = 'popup_hidden';
    }
}

images.addEventListener('click', getPictureBig);
window.addEventListener('keydown', closeByButton);
