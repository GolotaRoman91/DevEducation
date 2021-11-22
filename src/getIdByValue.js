function getIdByValue (value) {
    for (let item in linkedList) {
        if (item === value) {
            console.log(linkedList[value].id)
        }
    }
}
