function showHead () {
    for (let item in linkedList) {
        if (linkedList[item].head === true) {
            console.log(linkedList[item]);
        }
    }
}
