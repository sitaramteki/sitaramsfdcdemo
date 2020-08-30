import { LightningElement, track } from 'lwc';

export default class CourseFee extends LightningElement {
    courseName = 'DELL-Introduction';
    courseFee = '20';
    numberOfStudents = '11';
    @track totalFee = '220';

    handleFee(event) {
        this.courseFee = event.target.value;
        //this.handleclick();
    }
    handlestdNo(event) {
        this.numberOfStudents = event.target.value;
        //this.handleclick();
    }
    handleclick() {

        this.totalFee = parseFloat(this.courseFee) * parseFloat(this.numberOfStudents)
    }
    get totalAmount() {

        if (this.totalFee === 'undefined') {

            return '';

        }

        return this.totalFee;

    }

}