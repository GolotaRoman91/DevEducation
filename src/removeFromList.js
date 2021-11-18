function removeFromList (e) {
    if (remove.id !== 'Done') {
        e.target.setAttribute('hidden', 'hidden');
    }
    toLocalStorage();
}