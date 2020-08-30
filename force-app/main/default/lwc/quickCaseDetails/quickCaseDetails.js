import { LightningElement,wire, track } from 'lwc';
import {registerListener,unregisterAllListeners} from 'c/pubsub';
import CASE_OBJECT from '@salesforce/schema/Case';
import CASENUMBER_FIELD from '@salesforce/schema/Case.CaseNumber';
import STATUS_FIELD from '@salesforce/schema/Case.Status';
import ORIGIN_FIELD from '@salesforce/schema/Case.Origin';
import SUBECT_FIELD from '@salesforce/schema/Case.Subject';
import DESCRIPTION_FIELD from '@salesforce/schema/Case.Description';
import ContactEmail from '@salesforce/schema/Case.ContactEmail';
import ContactFax from '@salesforce/schema/Case.ContactFax';
import ContactMobile from '@salesforce/schema/Case.ContactMobile';
import ContactId from '@salesforce/schema/Case.ContactId';
import ClosedDate from '@salesforce/schema/Case.ClosedDate';
import CreatedDate from '@salesforce/schema/Case.CreatedDate';
import EngineeringReqNumber__c from '@salesforce/schema/Case.EngineeringReqNumber__c';
import IsEscalated from '@salesforce/schema/Case.IsEscalated';
import Comments from '@salesforce/schema/Case.Comments';
import SLAViolation__c from '@salesforce/schema/Case.SLAViolation__c';
import Type from '@salesforce/schema/Case.Type';

import{CurrentPageReference} from 'lightning/navigation';

export default class QuickCaseDetails extends LightningElement {
@track currentCaseRecordId;
@track showcurrentCaseRecordId;
@track viewcurrentCaseRecordId;
@track newcurrentCaseRecordId;
viewcase =false;
showcase =false;
newcase = false;
mode='view';
caseObject = CASE_OBJECT;
caseFields =[CASENUMBER_FIELD,STATUS_FIELD,ORIGIN_FIELD,SUBECT_FIELD,DESCRIPTION_FIELD,ContactEmail,ContactFax,ContactMobile,ContactId,ClosedDate,CreatedDate,EngineeringReqNumber__c,IsEscalated,Comments,SLAViolation__c,Type];
@wire(CurrentPageReference) pageRef;
connectedCallback(){
    registerListener("showCasedeiails",this.showCasedeiails,this);
    registerListener("viewCasedeiails",this.viewCasedeiails,this);  
    //console.log("callbackid :" + this);
}
showCasedeiails(caseid){
    this.showcurrentCaseRecordId=caseid;
    this.showcase =true;
   this.newcase = false;
   this.viewcase =false;
    this.mode='view';
   console.log("showcurrentCaseRecordId :" + this.showcurrentCaseRecordId);
}
viewCasedeiails(viewcaseid){
    this.viewcurrentCaseRecordId=viewcaseid;
    this.viewcase =true;
    this.showcase =false;
    this.newcase = false;
    this.mode='view';
   console.log("viewcurrentCaseRecordId :" + this.viewcurrentCaseRecordId);
}
disconnectedCallback(){
    unregisterAllListeners(this);
}
handlesuccessshowcase(event){
this.showcurrentCaseRecordId=event.detail.id;
}
handlesuccessviewcase(event){
    this.viewcurrentCaseRecordId=event.detail.id;
}
handlesuccessnewcase(event){
    this.newcurrentCaseRecordId=event.detail.id;
}
newCase(event){
    this.viewcase =false;
    this.showcase =false;
    this.newcase = true;
    this.showcurrentCaseRecordId=null;
    this.viewcurrentCaseRecordId=null;
    this.newcurrentCaseRecordId=null;
}
newClose(event){
    this.viewcase =false;
    this.showcase =false;
    this.newcase = false;
    this.showcurrentCaseRecordId=null;
    this.viewcurrentCaseRecordId=null;
    this.newcurrentCaseRecordId=null;
}
}