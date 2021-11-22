function deleteByID (id) {
    for (let item in linkedList) {
        if (linkedList[item].id === id) {
            deleteValue(item)
        }
    }
}
