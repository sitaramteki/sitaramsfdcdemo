import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import fetchCaseDetails from '@salesforce/apex/caseManager.fetchCaseDetails';
import closeCase from '@salesforce/apex/caseManager.closeCase';
import getCase from '@salesforce/apex/caseManager.getCase';
import fetchOpenCaseDetails from '@salesforce/apex/caseManager.fetchOpenCaseDetails';
export default class caseManagerrefresh extends LightningElement {
    searchCaseNumber;
    cases;
    caseId;
    caseCloseMessage;
    errorDetails;
    caseNumberChange(event) {
        this.searchCaseNumber = event.target.value;
        console.log("this.searchCaseNumber" + this.searchCaseNumber);
        fetchOpenCaseDetails({ caseNumber: this.searchCaseNumber })
            .then(result => {
                this.cases = result;
                this.errorDetails = undefined;
            })
            .catch(error => {
                this.errorDetails = error;
                this.cases = undefined;
            });
    }
    passCaseToClose(event){
        this.caseId= event.target.name;
        closeCase({caseId:this.caseId})
        .then(result=>{
            this.caseCloseMessage =result;
            console.log("this.caseCloseMessage" + this.caseCloseMessage);
            fetchOpenCaseDetails({ caseNumber: this.searchCaseNumber })
            .then(result => {
                this.cases = result;
                this.errorDetails = undefined;
            })
            .catch(error => {
                this.errorDetails = error;
                this.cases = undefined;
            });
            const evt = new ShowToastEvent({
                title :'Success!',
                message: 'The Case Record ('+this.caseId+ ') has been Closed successfully',
                variant:'success',
                duration: '5000'
            });
            this.dispatchEvent(evt);
         } )
        .catch(error=>{
        this.errorDetails=error;
        });
        
        
    }
    

}