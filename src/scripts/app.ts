import {actionAfterGetData} from './afterGetData';

type DogsPictures = {
    message: Array<string>,
    status: string
}

export function getData ():void {
    let downloadedPhotos: DogsPictures;
    fetch('https://dog.ceo/api/breeds/image/random/36')
    .then((res) => res.json())
    .then((photos) => downloadedPhotos = {...photos})
    .then(() => actionAfterGetData(downloadedPhotos))
};

