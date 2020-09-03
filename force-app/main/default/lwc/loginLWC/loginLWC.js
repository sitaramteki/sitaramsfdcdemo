import { LightningElement } from 'lwc';
import My_Resource from '@salesforce/resourceUrl/loginsplash';
import { NavigationMixin } from 'lightning/navigation';
export default class StaticResourceLWCExample extends NavigationMixin (LightningElement) {
    loginsplash = My_Resource;
    opendialog =true;
    closedialog() {
        this.opendialog =false;
        // Use the built-in 'Navigate' method
        
       /* this[NavigationMixin.Navigate]({
            "type": "standard__objectPage",
            "attributes": {
                "objectApiName": "Account",
                "actionName": "home"
            }
        });
        this.opendialog =false;*/
    }       
}