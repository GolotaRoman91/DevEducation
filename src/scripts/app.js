(function getData () {
    let downloadedPhotos = [];
    fetch('https://dog.ceo/api/breeds/image/random/36')
    .then((res) => res.json())
    .then((photos) => downloadedPhotos = {...photos})
    .then(() => actionAfterGetData(downloadedPhotos))
}());
