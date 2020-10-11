import { Priority, ItemValue } from './config/types';

export class Item {
    public constructor({ content, priority}:ItemValue) {
        this.content = content;
        this.priority = priority;
    }

    private content:string = '';
    private priority:Priority = 'medium';
    private isDone:boolean = false;
    private date:Date = new Date();
    private id:string = `id-${this.date}`;

    setContent(content:string) {
        this.content = content;
    }
    setPriority(priority:Priority) {
        this.priority = priority;
    }
    setDone(done:boolean) {
        this.isDone = done;
    }
    getDate() {
        return this.date;
    }
    getId() {
        return this.id;
    }
}