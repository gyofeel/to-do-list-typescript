import { Item } from './Item';

export const getEl = (selectors) => {
    return document.querySelector(selectors);
}

export const addEvent = (selectors, type, callback, useCapture) => {
    return getEl(selectors).addEventListener(type, callback, useCapture);
}

export const removeEvent = (selectors, type, callback, useCapture) => {
    return getEl(selectors).removeEventListener(type, callback, useCapture);
}

const createItemElement = (item:Item) => {
    const { content, priority, isDone } = item;
    const id = item.getId();
    const element = `
        <div class="item" id="${id}">
            <span class="is-done ${isDone ? 'ok' : ''}">
            <span class="content">${content}</span>
            <span class="priority ${priority}"></span>
        </div>
    `

    return element;
}

export const updateListChildElements = (selector:string, list:Array<Item>) => {
    if (!selector || !list || list.length) {
        return;
    }
    const wrapElement = getEl(selector);

    const itemElements = list.map((item) => createItemElement(item)).join('');
    wrapElement.innerHTML = '';
    wrapElement.innerHTML = itemElements;    
}