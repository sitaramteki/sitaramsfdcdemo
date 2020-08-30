import { LightningElement } from 'lwc';

export default class AllCourseIterator extends LightningElement {

    allCouseDetails = [{
        id: 1,
        courseName: 'DELL-Introduction',
        courseDuration: '2days',
        mentor: 'Praveen'
    }, {
        id: 2,
        courseName: 'DELL-Security',
        courseDuration: '3days',
        mentor: 'Ramu'
    }, {
        id: 3,
        courseName: 'DELL-Policy',
        courseDuration: '4days',
        mentor: 'Srini'
    }, {
        id: 4,
        courseName: 'DELL-Integrity',
        courseDuration: '7days',
        mentor: 'Ravi'
    }];
}