import { LightningElement, wire } from 'lwc';
import{fireEvent} from 'c/pubsub';
import{CurrentPageReference} from 'lightning/navigation';
export default class MyPropertyFilter extends LightningElement {
    location;
    noOfBedRoom;
    noOfBathRoom;
    maxBudget;
    get locationsOptions(){
        return[
            {label:'ALL',value:'ALL'},
            {label:'Bangalore',value:'Bangalore'},
            {label:'Pune',value:'Pune'},
            {label:'Mumbai',value:'Mumbai'},
            {label:'Hyderabad',value:'Hyderabad'},
            {label:'Chennai',value:'Chennai'},
            {label:'Bhuvaneshwar',value:'Bhuvaneshwar'}
        ];
    }
    get noOfBedRoomOptions(){
            return[
                {label:'ALL',value:'ALL'},
                {label:'1',value:'1'},
                {label:'2',value:'2'},
                {label:'3',value:'3'},
                {label:'4',value:'4'}
               
            ];

    }
    get noOfBathRoomOptions(){
        return[
            {label:'ALL',value:'ALL'},
            {label:'1',value:'1'},
            {label:'2',value:'2'},
            {label:'3',value:'3'},
            {label:'4',value:'4'}
           
        ];

}
@wire(CurrentPageReference) pageRef;
handleLocationChange(event){
this.location = event.target.value;
fireEvent(this.pageRef,"handleLocationFilterChange",this.location);
console.log("location :" + this.location);
}
handleBedRoomChange(event){
    this.noOfBedRoom = event.target.value;
    fireEvent(this.pageRef,"handleBedRoomFilterChange",this.noOfBedRoom);
    console.log("noOfBedRoom :" + this.noOfBedRoom);
}
handleBathRoomChange(event){
    this.noOfBathRoom = event.target.value;
    fireEvent(this.pageRef,"handleBathRoomFilterChange",this.noOfBathRoom);
    console.log("noOfBathRoom :" + this.noOfBathRoom);
}
handleBudgetChange(event){
    this.maxBudget = event.target.value;
    fireEvent(this.pageRef,"handleBudgetFilterChange",this.maxBudget);
    console.log("maxBudget :" + this.maxBudget);
}
handleClearClick(event){
    this.location = 'ALL';
    this.noOfBedRoom = 'ALL';
    this.noOfBathRoom = 'ALL';
    this.maxBudget = null;
    const t = {location: this.location, maxBudget: this.maxBudget, noOfBathRoom:this.noOfBathRoom,noOfBedRoom:this.noOfBedRoom};
    let payload = Object.assign({}, t);
    fireEvent(this.pageRef,"handleClearFilterChange", payload);
}
}