function addValue(value) {
    const res = {};
    res[value] = value;
    res['head'] = false;
    res['tail'] = true;
    res['next'] = next;
    res['id'] = counterId;
    linkedList[value] = res;

    function next() {
        console.log(linkedList[(Object.keys(linkedList)[(Object.keys(linkedList)).indexOf(Object.keys(res)[0]) + 1])]);
    }

    if (Object.keys(linkedList).length === 1) {
        res.head = true;
    }

    for (let i = 0; i < Object.keys(linkedList).length - 1; i++) {
        linkedList[Object.keys(linkedList)[i]].tail = false
    }

    return counterId++
}
