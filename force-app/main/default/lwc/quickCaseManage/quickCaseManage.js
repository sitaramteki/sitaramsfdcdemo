import { LightningElement,wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import fetchCaseDetails from '@salesforce/apex/caseManager.fetchCaseDetails';
import closeCase from '@salesforce/apex/caseManager.closeCase';
import getCase from '@salesforce/apex/caseManager.getCase';
import fetchOpenCaseDetails from '@salesforce/apex/caseManager.fetchOpenCaseDetails';
import{fireEvent} from 'c/pubsub';
import{CurrentPageReference} from 'lightning/navigation';
export default class QuickCaseManage extends LightningElement {
    searchCaseNumber;
    cases;
    caseId;
    caseCloseMessage;
    errorDetails;
    caserecordId;
  
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
    @wire(CurrentPageReference) pageRef;
   /* passCaseToClose(event){
        this.caseId= event.target.name;
        closeCase({caseId:this.caseId})
        .then(result=>{
            this.caseCloseMessage = result;
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
                message: 'The Case Record ('+this.caseId+') has been Closed successfully',
                variant:'success',
                duration: '1000'
            });
            this.dispatchEvent(evt);
            
         } )
        .catch(error=>{
        this.errorDetails=error;
        });
        fireEvent(this.pageRef,"viewCasedeiails",this.caseId);
            console.log("Casedeiails:closebutton" + this.caseId);
            console.log("Casedeiails:pageRef" + this.pageRef);
        
    }*/
    passCaseToClose(event){
        this.caseId= event.target.name;
        closeCase({caseId:this.caseId})
        .then(result=>{
            this.caseCloseMessage = result;
            console.log("this.caseCloseMessage" + this.caseCloseMessage);
            fetchOpenCaseDetails({ caseNumber: this.searchCaseNumber })
            .then(result => {
                this.cases = result;
                console.log("this.cases" + this.cases);
                fireEvent(this.pageRef,"viewCasedeiails",this.caseId);
                console.log("Casedeiails:closebutton" + this.caseId);
                this.errorDetails = undefined;
            })
            .catch(error => {
                this.errorDetails = error;
                this.cases = undefined;
            });
         } )
        .catch(error=>{
        this.errorDetails=error;
        });
        
        
    }
@wire(CurrentPageReference) pageRef;
viewcasedetails(event){
this.caserecordId = event.target.value;
fireEvent(this.pageRef,"showCasedeiails",this.caserecordId);
console.log("showCasedeiails :" + this.caserecordId);
console.log("showCasedeiails:pageRef :" + this.pageRef);
}

}