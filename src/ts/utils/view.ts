import { Item } from '../Item';

export const getEl = (selectors:string) => {
    return document.querySelector(selectors);
}

// export const addEvent = (selectors:string, type:string, callback:Function, useCapture:boolean) => {
//     const target = getEl(selectors);
//     if (!target) {
//         return;
//     }
//     return target.addEventListener(type, callback, useCapture);
// }

// export const removeEvent = (selectors:string, type:string, callback:Function, useCapture:boolean) => {
//     return getEl(selectors).removeEventListener(type, callback, useCapture);
// }

const createItemElement = (item:Item) => {
    const { content, priority, isDone } = item;
    const id = item.getId();
    const element = `
        <div class="item" id="${id}">
            <div class="is-done ${isDone ? 'ok' : ''}"></div>
            <span class="content">${content}</span>
            <span class="priority ${priority}"></span>
            <span class="remove">삭제</span>
        </div>
    `

    return element;
}

export const updateListChildElements = (selector:string, list:Array<Item>) => {
    if (!selector || !list) {
        return;
    }
    const wrapElement = getEl(selector);
    const itemElements = list.map((item) => createItemElement(item)).join('');
    wrapElement!.innerHTML = '';
    wrapElement!.innerHTML = itemElements;
}