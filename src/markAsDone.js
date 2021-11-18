function markAsDone (e) {
    if (e.target.id !== 'Done') {
        e.target.setAttribute('id', 'Done');
        e.target.style = 'text-decoration: line-through';
        toLocalStorage();
        return 
    }
    if (e.target.id === 'Done') {
        e.target.setAttribute('id', 'Not_Done');
        e.target.style = '';
        toLocalStorage();
        return
    }
}