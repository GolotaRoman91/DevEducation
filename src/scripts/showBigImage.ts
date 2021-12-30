import { elements } from './object';

export function transitionBigImages(this: any): void {
    elements.blockPopup.classList.add('popupOn');
    let bigUrl = urlBigImages(this.id);
    elements.imgPopup.setAttribute('src', bigUrl);
}

export function createArrIdUrl(noteId: number, urlBig: string): void {
    let obj: any = {};
    obj[noteId] = urlBig;
    elements.arrUrlBigImages.push(obj);
}

export function urlBigImages(id: string[]): string {
    let url = elements.arrUrlBigImages.map(item => {
        if (Object.keys(item) == id) return String(Object.values(item));
    });
    let resultUrl = String(url.filter(Boolean));
    return resultUrl;
}

export function closeBlockBigImage(): void {
    elements.blockPopup.classList.remove('popupOn');
}
