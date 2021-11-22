function showTail () {
    for (let item in linkedList) {
        if (linkedList[item].tail === true) {
            console.log(linkedList[item]);
        }
    }
}
