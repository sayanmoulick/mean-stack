export class Todo {
    id: number;
    inc_exp_type: string = '';
    amount: number;
    title: string = '';
    complete: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
