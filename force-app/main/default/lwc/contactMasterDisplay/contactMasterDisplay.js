import { LightningElement, wire } from 'lwc';
import fetchAllContacts from '@salesforce/apex/contactManager.fetchAllContacts';
import getAllAccount from '@salesforce/apex/contactManager.getAllAccount';
import { NavigationMixin } from 'lightning/navigation';
export default class contactMasterDisplay extends NavigationMixin(LightningElement) {
    selectedAccount;
    accountOptions = [];
    errorDeatails;
    @wire(getAllAccount)
    accountProcess({error,data}){
        if(data){
            this.errorDeatails = undefined;
           for(var i=0;i<data.length;i++){
                this.accountOptions = [...this.accountOptions,{value:data[i].Id,label:data[i].Name}];
           }
        }
        else if(error){
            this.data = undefined;
            this.errorDeatails = error;
        }
    }
    accountNameChange(event) {
        this.selectedAccount = event.detail.value;
    }
    @wire(fetchAllContacts, { accountId: '$selectedAccount' })
    contacts;
    contactId;
    NavigateToDetails(event) {
        this.contactId = event.target.value;
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.contactId,
                objectApiName: 'Contact',
                actionName: 'view'
            }

        });
    }
}