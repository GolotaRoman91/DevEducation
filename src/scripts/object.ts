export const elements: myElements = {
    url: 'https://jsonplaceholder.typicode.com/photos?_limit=200',
    pictures: document.querySelector('.pictures') as HTMLInputElement,
    pagination: document.querySelector('#pagination') as HTMLInputElement,
    closeBigImage: document.querySelector('.popupClose') as HTMLInputElement,
    blockPopup: document.querySelector('.popup') as HTMLInputElement,
    imgPopup: document.querySelector('.imagePopup') as HTMLInputElement,
    notesOnPage: 20,
    arrResult: [],
    items: [],
    arrUrlBigImages: [],
};

interface myElements {
    url: string;
    pictures: HTMLInputElement;
    pagination: HTMLInputElement;
    closeBigImage: HTMLInputElement;
    blockPopup: HTMLInputElement;
    imgPopup: HTMLInputElement;
    notesOnPage: number;
    arrResult: any[];
    items: any[];
    arrUrlBigImages: any[];
}
