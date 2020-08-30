import { LightningElement, wire } from 'lwc';
import getLatestProperty from '@salesforce/apex/PropertyDetails.getLatestProperty';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import getSearchedProperty from '@salesforce/apex/PropertyDetails.getSearchedProperty';
import {registerListener,unregisterAllListeners} from 'c/pubsub';
import { CurrentPageReference} from 'lightning/navigation';
import { NavigationMixin } from 'lightning/navigation';
export default class MyPropertyResult extends NavigationMixin(LightningElement) {
propOwnerId;
openOwnerDetails=false;
properties;
propertiesFound;
openEnquieryDetails =false;
enquierypropertyId;
locChange;
BedChange;
BathChange;
BudgetChange;
@wire(getLatestProperty)
wiredProperties({data,error}){
    if(data){
        this.properties =data;
        this.propertiesFound =true;
    }
    else if(error){
        this.showToast('Error',error.body.message,'error');
       this.propertiesFound =false;
    }
}
showToast(title,message,variant){
    const evt = new ShowToastEvent({
        title: title,
        message:message,
        variant:variant,
    });  
    this.dispatchEvent(evt);  
}
ownerDetailsClick(event){
    this.propOwnerId =event.target.value;
    this.openOwnerDetails=true;
    console.log("openOwnerDetails :" + this.openOwnerDetails);
    console.log("propOwnerId:" + this.propOwnerId);
}
closeOwnerModel(event){
    this.openOwnerDetails=false;
}
EnquieryDetailsClick(event){
    this.enquierypropertyId =event.target.value;
    this.openEnquieryDetails=true;
    console.log("enquierypropertyId :" + this.enquierypropertyId);
    console.log("openEnquieryDetails:" + this.openEnquieryDetails);
}
navigateToViewPropertyPage(event) {
    this.enquierypropertyId =event.target.value;
    this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: {
            recordId: this.enquierypropertyId,
            objectApiName: 'Property_Enquiry__c',
            actionName: 'view'
        },
    });
}
closeEnquieryModel(event){
    this.openEnquieryDetails=false;
}

@wire(CurrentPageReference) pageRef;
connectedCallback(){
    registerListener("handleLocationFilterChange",this.handleLocationFilterChange,this);
    registerListener("handleBedRoomFilterChange",this.handleBedRoomFilterChange,this);
    registerListener("handleBathRoomFilterChange",this.handleBathRoomFilterChange,this);
    registerListener("handleBudgetFilterChange",this.handleBudgetFilterChange,this);
    registerListener("handleClearFilterChange",this.handleClearFilterChange,this);
    
    
}
disconnectedCallback(){
    unregisterAllListeners(this);
}

handleLocationFilterChange(locFilter){
    this.locChange =locFilter;
    getSearchedProperty({
        location: this.locChange,
        bedroom : this.BedChange,
        bathroom :this.BathChange,
        maxbudget: this.BudgetChange
    })
    .then(result=>{
        
        this.properties = result;
        
    })
    .catch(error =>{
        this.showToast('ERROR',error.body.message,'error');
    });
}
handleBedRoomFilterChange(bedFilter){
    this.BedChange =bedFilter;
    getSearchedProperty({
        location: this.locChange,
        bedroom : this.BedChange,
        bathroom :this.BathChange,
        maxbudget: this.BudgetChange
    })
    .then(result=>{
        this.properties = result;
        
    })
    .catch(error =>{
        this.showToast('ERROR',error.body.message,'error');
    });
}
handleBathRoomFilterChange(bathFilter){
    this.BathChange =bathFilter;
    getSearchedProperty({
        location: this.locChange,
        bedroom : this.BedChange,
        bathroom :this.BathChange,
        maxbudget: this.BudgetChange
    })
    .then(result=>{
        this.properties = result;
       
    })
    .catch(error =>{
        this.showToast('ERROR',error.body.message,'error');
    });
}
handleBudgetFilterChange(BudgetFilter){
    this.BudgetChange =BudgetFilter;
    getSearchedProperty({
        location: this.locChange,
        bedroom : this.BedChange,
        bathroom :this.BathChange,
        maxbudget: this.BudgetChange
    })
    .then(result=>{
        this.properties = result;
        
    })
    .catch(error =>{
        this.showToast('ERROR',error.body.message,'error');
    });
}
handleClearFilterChange(payload){
    /*console.log("payload location:" + payload.location);
    console.log("payload noOfBedRoom:" + payload.noOfBedRoom);
    console.log("payload noOfBathRoom:" + payload.noOfBathRoom);
    console.log("payload BudgetFilter:" + payload.BudgetFilter);*/
    this.locChange =payload.location;
    this.BedChange =payload.noOfBedRoom;
    this.BathChange =payload.noOfBathRoom;
    this.BudgetChange =payload.BudgetFilter;

    getSearchedProperty({
        location: this.locChange,
        bedroom : this.BedChange,
        bathroom :this.BathChange,
        maxbudget: this.BudgetChange
    })
    .then(result=>{
        this.properties = result;
        
    })
    .catch(error =>{
        this.showToast('ERROR',error.body.message,'error');
    });
}
}