import { elements } from './object';
import { closeBlockBigImage } from './showBigImage';

export function closeBigImageX() {
    elements.closeBigImage.addEventListener('click', closeBlockBigImage);
}
