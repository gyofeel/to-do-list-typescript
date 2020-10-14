import { Item } from './Item';
import { Store } from './Store';
import { getEl } from './utils/view';

export class Controller {
    constructor(store:Store) {
        this.store = store;
    }
    private store:Store | null = null;
    private progressIdList:Array<string> = [];
    private doneIdList:Array<string> = [];

    public initialize() {
        console.log('test');
        if (!this.store) {
            console.error('this.store is null!');
            return;
        }
        getEl('.input-button')?.addEventListener('click', this.clickAddItemEventHandler, false);
        getEl('.priority-buttons')?.addEventListener('click', this.clickPriorityEventHandler, true);
        const progressList = this.store.getProgressList();
        const doneList = this.store.getDoneList();
        if (progressList && progressList.length) {
            this.progressIdList = progressList.map(el => el.getId());
        }
        if (doneList && doneList.length) {
            this.doneIdList = doneList.map(el => el.getId());
        }

        this.progressIdList.forEach(id => {
            const childNodesList = getEl(`#${id}`)!.children;
            childNodesList[0].addEventListener('click', this.clickToggleDoneEventHandler, false);
            childNodesList[3].addEventListener('click', this.clickRemoveEventHandler, false);
        });
        this.doneIdList.forEach(id => {
            const childNodesList = getEl(`#${id}`)!.children;
            childNodesList[0].addEventListener('click', this.clickToggleDoneEventHandler, false);
            childNodesList[3].addEventListener('click', this.clickRemoveEventHandler, false);
        });
    }

    private clickToggleDoneEventHandler(e:Event) {

    }
    private clickRemoveEventHandler(e:Event) {

    }
    private clickAddItemEventHandler(e:Event) {
        console.log(e);
        // const target = e.target as HTMLElement;
        const inputEl = getEl('.item-input') as HTMLInputElement;
        console.log(inputEl.value);
        const itemContent = inputEl.value;
        this.store.addProgressItem(new Item(itemContent, this.store.inputPriority));
    }
    private clickPriorityEventHandler(e:Event) {
        console.log(e);
    }
}