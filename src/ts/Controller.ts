import { Priority, IdList } from './config/types';
import { Item } from './Item';
import { Store } from './Store';
import { getEl } from './utils/view';

export class Controller {
    public constructor(store:Store) {
        this.store = store;
    }
    private store:Store | null = null;
    private progressIdList:IdList = [];
    private doneIdList:IdList = [];

    public initialize() {
        if (!this.store) {
            console.error('this.store is null!');
            return;
        }
        getEl('.input-button')?.addEventListener('click', this.clickAddItemEventHandler.bind(this), false);
        getEl('.priority-buttons')?.addEventListener('click', this.clickPriorityEventHandler.bind(this), true);
        const progressList = this.store.getProgressList();
        const doneList = this.store.getDoneList();
        if (progressList && progressList.length) {
            this.progressIdList = progressList.map(el => el.getId());
        }
        if (doneList && doneList.length) {
            this.doneIdList = doneList.map(el => el.getId());
        }

        this.registerListEvent(this.getListToIdList(this.store.getProgressList()));
        this.registerListEvent(this.getListToIdList(this.store.getDoneList()));

        getEl('.json-button.import').addEventListener('click', this.clickJsonImportEventHandler.bind(this), false);
        getEl('.json-button.export').addEventListener('click', this.clickJsonExportEventHandler.bind(this), false);
    }
    private getNewId() {
        return `id-${Date.now()}`;
    }
    private getListToIdList(list) {
        return list.map(el => el.getId());
    }
    private registerItemEvent(id) {
        const childNodesList = getEl(`#${id}`)!.children;
        console.log(childNodesList);
        childNodesList[0].addEventListener('click', this.clickToggleDoneEventHandler.bind(this), false);
        childNodesList[3].addEventListener('click', this.clickRemoveEventHandler.bind(this), false);
    }
    private registerListEvent(idList:IdList) {
        idList.forEach(id => {
            this.registerItemEvent(id);
        });
    }
    private clickToggleDoneEventHandler(e:Event) {
        console.log(e);
        const targetEl = e.target as HTMLElement;
        const itemId = targetEl.parentElement.id;
        if (this.progressIdList.includes(itemId)) {
            this.store.moveProgressToDone(itemId);
        } else if (this.doneIdList.includes(itemId)) {
            this.store.moveDoneToProgress(itemId);
        }
        this.progressIdList = this.getListToIdList(this.store.getProgressList());
        this.registerListEvent(this.progressIdList);
        this.doneIdList = this.getListToIdList(this.store.getDoneList());
        this.registerListEvent(this.doneIdList);
    }
    private clickRemoveEventHandler(e:Event) {
        console.log(e);
        const targetEl = e.target as HTMLElement;
        const itemId = targetEl.parentElement.id;
        console.log(itemId);
        if (this.progressIdList.includes(itemId)) {
            this.store.removeProgressItem(itemId);
            this.progressIdList = this.getListToIdList(this.store.getProgressList());
            this.registerListEvent(this.progressIdList);
        } else if (this.doneIdList.includes(itemId)) {
            this.store.removeDoneItem(itemId);
            this.doneIdList = this.getListToIdList(this.store.getDoneList());
            this.registerListEvent(this.doneIdList);
        }
    }
    private clickAddItemEventHandler(e:Event) {
        console.log(e);
        const inputEl = getEl('.item-input') as HTMLInputElement;
        const itemContent = inputEl.value;
        if (!itemContent) {
            return;
        }
        const id = this.getNewId();
        this.store.addProgressItem(new Item(itemContent, this.store.inputPriority, id));
        this.progressIdList = this.getListToIdList(this.store.getProgressList());
        this.registerListEvent(this.progressIdList);
        inputEl.value = '';
        console.log(this.store);
    }
    private clickPriorityEventHandler(e:Event) {
        console.log(e);
        const targetEl = e.target as HTMLElement;
        const parentEl = targetEl.parentElement as HTMLElement;
        const priorityValue = targetEl.classList[0]
        if (priorityValue !== 'high' && priorityValue !== 'medium' && priorityValue !== 'low') {
            return;
        }
        this.store.inputPriority = priorityValue as Priority;
        let selectedIdxNum = 0;
        if (priorityValue === 'high') {
            selectedIdxNum = 3;
        } else if (priorityValue === 'medium') {
            selectedIdxNum = 2;
        } else {
            selectedIdxNum = 1;
        }
        parentEl.children[0].className = 'low';
        parentEl.children[1].className = 'medium';
        parentEl.children[2].className = 'high';
        for (let i = 0; i < selectedIdxNum; i++) {
            parentEl.children[i].className += ' --selected';
        }
    }
    private clickJsonImportEventHandler(e:Event) {
        console.log(e);
        const textAreaEl = getEl('.json-text-area');
    }
    private clickJsonExportEventHandler(e:Event) {
        console.log(e);
        const textAreaEl = getEl('.json-text-area') as HTMLTextAreaElement;
        textAreaEl.value = this.store.getStoreJsonData();
    }
}