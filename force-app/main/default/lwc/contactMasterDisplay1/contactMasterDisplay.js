import { LightningElement, wire } from 'lwc';
import fetchAllContact from '@salesforce/apex/contactManager.fetchAllContact'
import { NavigationMixin } from 'lightning/navigation';
export default class ContactMasterDisplay extends NavigationMixin(LightningElement) {

    @wire(fetchAllContact)
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