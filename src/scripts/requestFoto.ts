import { elements } from './object';
import { createElPagination, navPagination, showPages } from './pagination';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

export async function requestFoto(): Promise<void> {
    const res = await fetch(elements.url);
    const data = await res.json();
    elements.arrResult = [...data];
    createElPagination();
    showPages(elements.items[0]);
    navPagination();
}
