import { LightningElement } from 'lwc';
import postOfficeByPincode from '@salesforce/apex/PostalDepartmentAPI.postOfficeByPincode';
import postOfficeByBranchName from '@salesforce/apex/PostalDepartmentAPI.postOfficeByBranchName';
export default class PostalDepartment extends LightningElement {
    errorDetails;
    searchBranchName;
    showdatatable =false;
    searchPinNumber;
    postalDetaillList;
    columns = [
    {
        label:'Name',
        fieldName:'Name',
        type:'text',
        sortable: true
    },
    {
        label: 'Description',
        fieldName: 'Description',
        type: 'text',
        sortable: true
    },
    {
        label: 'PINCode',
        fieldName: 'PINCode',
        type: 'text',
        sortable: true
    },
    {
        label: 'BranchType',
        fieldName: 'BranchType',
        type: 'text',
        sortable: true
    },
    {
        label: 'DeliveryStatus',
        fieldName: 'DeliveryStatus',
        type: 'text',
        sortable: true
    },
    {
        label: 'Circle',
        fieldName: 'Circle',
        type: 'test',
        sortable: true
    },
    {
        label:'District',
        fieldName:'District',
        type:'text',
        sortable: true
    },

    {
        label:'Division',
        fieldName:'Division',
        type:'text',
        sortable: true
    },
    {
        label:'Region',
        fieldName:'Region',
        type:'text',
        sortable: true
    },
    {
        label:'State',
        fieldName:'State',
        type:'text',
        sortable: true
    },
    {
        label:'Country',
        fieldName:'Country',
        type:'text',
        sortable: true
    }
];

pinNumberClick(event) {
    console.log("this.searchPinNumber" + this.searchPinNumber);
    postOfficeByPincode({ pincode: this.searchPinNumber })
        .then(result => {
            console.log("this.result" + result);
            this.postalDetaillList = result;
            this.showdatatable =true;
            this.errorDetails = undefined;
        })
        .catch(error => {
            console.log("this.error" + error);
            this.errorDetails = error;
            this.postalDetaillList = undefined;
            this.showdatatable =false;
        });
}
branchNameClick(event) {
    console.log("this.searchPinNumber" + this.searchBranchName);
    postOfficeByBranchName({ branchName: this.searchBranchName })
        .then(result => {
            console.log("this.result" + result);
            this.postalDetaillList = result;
            this.showdatatable =true;
            this.errorDetails = undefined;
        })
        .catch(error => {
            console.log("this.error" + error);
            this.errorDetails = error;
            this.postalDetaillList = undefined;
            this.showdatatable =false;
        });
}
searchPinNumberChange(event){
    this.searchPinNumber = event.target.value;
}
searchBranchChange(event){
    this.searchBranchName = event.target.value;
}
handleClear(event){
    this.searchBranchName =null;
    this.searchPinNumber=null;
    this.showdatatable=false;
}
}