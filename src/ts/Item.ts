import { Priority } from './config/types';

export class Item {
    public constructor(content, priority, id) {
        this.content = content;
        this.priority = priority;
        this.id = id;
    }

    public content:string = '';
    public priority:Priority = 'medium';
    public isDone:boolean = false;
    private date:number = Date.now();
    private id:string = '';

    getDate() {
        return this.date;
    }
    getId() {
        return this.id;
    }
}