import { Priority } from './config/types';

export class Item {
    public constructor(content, priority, id, date, isDone?) {
        this.content = content;
        this.priority = priority;
        this.id = id;
        this.date = date;
        this.isDone = isDone;
    }

    public content:string = '';
    public priority:Priority = 'medium';
    public isDone:boolean = false;
    private date:number = 0;
    private id:string = '';

    getDate() {
        return this.date;
    }
    getId() {
        return this.id;
    }
    getObjectData() {
        return {
            content: this.content,
            priority: this.priority,
            isDone: this.isDone,
            date: this.date,
            id: this.id
        };
    }
}