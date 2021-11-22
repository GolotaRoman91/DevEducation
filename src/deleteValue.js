function deleteValue (value) {
    delete linkedList[value]
    linkedList[Object.keys(linkedList)[Object.keys(linkedList).length - (Object.keys(linkedList).length)]].head = true;
    linkedList[Object.keys(linkedList)[Object.keys(linkedList).length - 1]].tail = true;
}
