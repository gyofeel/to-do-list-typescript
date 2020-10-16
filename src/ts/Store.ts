import { Priority, ItemList } from './config/types';
import { Item } from './Item';
import { updateListChildElements } from './utils/view';

export class Store {
    public constructor(id:string) {
        this.id = id;
    }

    private id:string = '';
    private progressList:ItemList = [];
    private doneList:ItemList = [];
    public inputPriority:Priority = 'medium';

    public getProgressItem(id:string) {
        return this.progressList.find(el => el.getId() === id);
    }
    public getDoneItem(id:string) {
        return this.doneList.find(el => el.getId() === id);
    }
    public getProgressList() {
        return this.progressList;
    }
    public getDoneList() {
        return this.doneList;
    }
    public addProgressItem(item:Item) {
        if (!item) {
            return;
        }
        item.isDone = false;
        this.progressList.push(item);
        this.progressList.sort((a, b) => b.getDate() - a.getDate());

        updateListChildElements('.in-progress', this.progressList);

        return item;
    }
    public addDoneItem(item:Item) {
        if (!item) {
            return;
        }
        item.isDone = true;
        this.doneList.push(item);
        this.doneList.sort((a, b) => b.getDate() - a.getDate());

        updateListChildElements('.done', this.doneList);

        return item;
    }
    public moveProgressToDone(id:string) {
        const item = this.getProgressItem(id);
        if (!item) {
            return;
        }
        this.addDoneItem(item);
        this.removeProgressItem(id);
        
        return item;
    }   
    public moveDoneToProgress(id:string) {
        const item = this.getDoneItem(id);
        if (!item) {
            return;
        }
        this.addProgressItem(item);
        this.removeDoneItem(id);

        return item;
    }
    public removeProgressItem(id:string) {
        const targetIdx = this.progressList.findIndex(el => el.getId() === id);
        if (targetIdx === -1) {
            return;
        }
        this.progressList.splice(targetIdx, 1);

        updateListChildElements('.in-progress', this.progressList);

        return this.progressList;
    }
    public removeDoneItem(id:string) {
        const targetIdx = this.doneList.findIndex(el => el.getId() === id);
        if (targetIdx === -1) {
            return;
        }
        this.doneList.splice(targetIdx, 1);
        
        updateListChildElements('.done', this.doneList);

        return this.doneList;
    }
    public clearProgressList() {
        this.progressList = [];
    }
    public clearDoneList() {
        this.doneList = [];
    }
}