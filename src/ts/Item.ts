import { Priority, ItemValue } from './config/types';

export class Item {
    public constructor({ content, priority}:ItemValue) {
        this.content = content;
        this.priority = priority;
    }

    public content:string = '';
    public priority:Priority = 'medium';
    public isDone:boolean = false;
    private date:number = Date.now();
    private id:string = `id-${this.date}`;

    getDate() {
        return this.date;
    }
    getId() {
        return this.id;
    }
}