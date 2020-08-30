import { LightningElement } from 'lwc';

export default class EnrollCourse extends LightningElement {
    allCouseDetails = [{
        id: 1,
        courseFee: '100',
        courseName: 'DELL-Introduction',
        courseDuration: '2days',
        courseRating: '****',
        mentor: 'Praveen'
    }, {
        id: 2,
        courseFee: '300',
        courseName: 'DELL-Security',
        courseDuration: '3days',
        courseRating: '***',
        mentor: 'Ramu'
    }, {
        id: 3,
        courseFee: '400',
        courseName: 'DELL-Policy',
        courseDuration: '4days',
        courseRating: '******',
        mentor: 'Srini'
    }, {
        courseFee: 4,
        fee: '500',
        courseName: 'DELL-Integrity',
        courseDuration: '7days',
        courseRating: '********',
        mentor: 'Ravi'
    }];
    handleenroll() {

    }
}