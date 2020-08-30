import { LightningElement } from 'lwc';

export default class BasicCalculator extends LightningElement {
    showresult = false;
    firstInput;
    secondInput;
    totalValue;

    firstInputChange(event) {
        this.firstInput = event.target.value;
    }
    secondInputChange(event) {
        this.secondInput = event.target.value;
    }
    handleAdd(event) {
        this.totalValue = Number(this.firstInput) + Number(this.secondInput);
        this.showresult = true;
    }
    handleSub(event) {
        this.totalValue = Number(this.firstInput) - Number(this.secondInput);
        this.showresult = true;
    }
    handleMul(event) {
        this.totalValue = Number(this.firstInput) * Number(this.secondInput);
        this.showresult = true;
    }
    handleDiv(event) {
        this.totalValue = Number(this.firstInput) / Number(this.secondInput);
        this.showresult = true;
    }
    handleClear(event) {
        this.showresult = false;
        this.totalValue = null;
        this.firstInput = null;
        this.secondInput = null;

    }
}