export const images: HTMLImageElement = document.querySelector('.images')!;
export const closeButton: HTMLElement = document.querySelector('.popup_close')!;

export function getPictureBig(evt: MouseEvent): void {
    evt.preventDefault()
    const target = evt.target as HTMLImageElement;
    const popup: HTMLElement = document.querySelector('.popup_hidden')!;
    const hiddenPicture: HTMLImageElement = document.querySelector('.hidden_img')!;
    hiddenPicture.src = target.src;
    popup.className = 'popup_show';
}

export function closeBigPicture(evt: MouseEvent): void  {
    evt.preventDefault()
    const popup: HTMLElement = document.querySelector('.popup_show')!;
    popup.className = 'popup_hidden';
}

export function closeByButton(evt: KeyboardEvent): void  {
    if (evt.key === 'Escape') {
        evt.preventDefault()
        const popup: HTMLElement = document.querySelector('.popup_show')!;
        popup.className = 'popup_hidden';
    }
}

export function addListenersBigpiture ():void {
    closeButton.addEventListener('click', closeBigPicture);
    images.addEventListener('click', getPictureBig);
    window.addEventListener('keydown', closeByButton);
}

