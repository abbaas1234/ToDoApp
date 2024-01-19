export class Model {
    user;
    items;

    constructor() {
        this.user = 'TopLearn.com';
        this.items = [
            {action: 'Buy Computer', done: false},
            {action: 'Do Work', done: false},
            {action: 'Task One', done: true},
            {action: 'Work Second', done: false},
        ]
    }
}


export class ToDoAction {
    action;
    done;

    constructor(action: string, done: boolean) {
        this.action = action;
        this.done = done;
    }
}