import { LightningElement, api } from 'lwc';

export default class LifecycleHookExample extends LightningElement {
    @api message = 'welcome';
    constructor() {
        super();
        this.message = this.message + ' to component life cycle-Constructor ';
        console.log('Executing Constructor-create of component');
    }
    connectedCallback() {
        this.message = this.message + ' to component life cycle-connected ';
        console.log('Executing connectedCallback')

    }
    disconnectedCallback() {
        this.message = this.message + ' to component life cycle-dicconnected ';
        console.log('Executing disconnectedCallback');
    }
    renderedCallback() {
        console.log('Executing renderedCallback');

    }
    errorCallback(error, stack) {
        console.log('Executing renderedCallback');
    }

}