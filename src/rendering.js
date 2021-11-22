function rendering () {
    let addHTML = 'Head ';
    list.innerHTML = '';
    for (let i = 0; i < getLength(); i++) {
        addHTML += `|${Object.keys(linkedList)[i]}| `;
        if (i < getLength() - 1) {
            addHTML += '--------> ';
        }
    }
    addHTML += `Tail`;
    list.innerHTML += addHTML
}
