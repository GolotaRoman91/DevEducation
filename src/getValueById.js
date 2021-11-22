function getValueById (id) {
    for (let item in linkedList) {
        if (linkedList[item].id === id) {
            console.log(linkedList[item])
        }
    }
}
