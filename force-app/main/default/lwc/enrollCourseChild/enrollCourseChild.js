import { LightningElement, api } from 'lwc';

export default class EnrollCourseChild extends LightningElement {
    @api courseDetails = {
        id: 6,
        courseFee: '100',
        courseName: 'EMC-Introduction',
        courseDuration: '2days',
        courseRating: '****',
        mentor: 'Praveen'
    }

}