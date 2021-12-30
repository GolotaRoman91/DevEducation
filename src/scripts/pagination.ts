import { elements } from './object';
import { transitionBigImages, createArrIdUrl } from './showBigImage';

export function createElPagination() {
    let numbersPag = Math.ceil(elements.arrResult.length / elements.notesOnPage);
    for (let i = 1; i <= numbersPag; i++) {
        let li: HTMLLIElement = document.createElement('li');
        li.textContent = '' + i;
        elements.pagination.appendChild(li);
        elements.items.push(li);
    }
}

export function navPagination() {
    for (let item of elements.items) {
        item.addEventListener('click', function (this: itemLi) {
            showPages(this);
        });
    }
}

export function showPages(item: itemLi) {
    changeClassNumPage(item);
    let pageNum = +item.textContent;
    let start = (pageNum - 1) * elements.notesOnPage;
    let end = start + elements.notesOnPage;
    let notes = elements.arrResult.slice(start, end);
    elements.pictures.textContent = '';
    for (let note of notes) {
        createArrIdUrl(note.id, note.url);
        createBlocksImage(note.id, note.thumbnailUrl);
    }
}

export function createBlocksImage(id: string, url: string) {
    let blockDiv = document.createElement('div');
    blockDiv.classList.add('blockImg');
    blockDiv.setAttribute('id', id);
    blockDiv.addEventListener('click', transitionBigImages);
    let linkA = document.createElement('a');
    let blockImg = document.createElement('img');
    linkA.setAttribute('href', '#');
    blockImg.setAttribute('src', url);
    blockDiv.appendChild(linkA);
    linkA.appendChild(blockImg);
    elements.pictures.appendChild(blockDiv);
}

export function changeClassNumPage(item: itemLi) {
    let activLi = document.querySelector('#pagination li.active');
    if (activLi) {
        activLi.classList.remove('active');
    }
    item.classList.add('active');
}

type TAdd = {
    add: any;
};

interface itemLi {
    textContent: string;
    classList: TAdd;
}
