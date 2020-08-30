import { LightningElement } from 'lwc';

export default class EnrollAllCourse extends LightningElement {
    allCouseDetails = [{
        id: 6,
        courseFee: '100',
        courseName: 'EMC-Introduction',
        courseDuration: '2days',
        courseRating: '****',
        mentor: 'Praveen'
    }, {
        id: 7,
        courseFee: '300',
        courseName: 'EMC-Security',
        courseDuration: '3days',
        courseRating: '***',
        mentor: 'Ramu'
    }, {
        id: 8,
        courseFee: '400',
        courseName: 'EMC-Policy',
        courseDuration: '4days',
        courseRating: '******',
        mentor: 'Srini'
    }, {
        courseFee: 9,
        fee: '500',
        courseName: 'EMC-Integrity',
        courseDuration: '7days',
        courseRating: '********',
        mentor: 'Ravi'
    }];
}