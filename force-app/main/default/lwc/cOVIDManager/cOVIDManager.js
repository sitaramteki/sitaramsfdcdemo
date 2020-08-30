import { LightningElement } from 'lwc';
import getCOVID19Summary from '@salesforce/apex/COVIDManager.getCOVID19Summary';
import getCOVID19GlobalSummary from '@salesforce/apex/COVIDManager.getCOVID19GlobalSummary';

export default class COVIDManager extends LightningElement {
    countrySummary;
    globalSummary;
    errorDetails;
    showcountrydatatable=false;
    showcountrydatatablecard=false;
    showglobaldatatable=false;
    countrycolumns = [
        {
            label:'Country',
            fieldName:'Country',
            type:'text',
            sortable: true
        },
        {
            label: 'CountryCode',
            fieldName: 'CountryCode',
            type: 'text',
            sortable: true
        },
        {
            label: 'Slug',
            fieldName: 'Slug',
            type: 'text',
            sortable: true
        },
        {
            label: 'NewConfirmed',
            fieldName: 'NewConfirmed',
            type: 'text',
            sortable: true
        },
        {
            label: 'TotalConfirmed',
            fieldName: 'TotalConfirmed',
            type: 'text',
            sortable: true
        },
        {
            label: 'NewDeaths',
            fieldName: 'NewDeaths',
            type: 'test',
            sortable: true
        },
        {
            label:'TotalDeaths',
            fieldName:'TotalDeaths',
            type:'text',
            sortable: true
        },
    
        {
            label:'NewRecovered',
            fieldName:'NewRecovered',
            type:'text',
            sortable: true
        },
        {
            label:'TotalRecovered',
            fieldName:'TotalRecovered',
            type:'text',
            sortable: true
        },
        {
            label:'CurrentDate',
            fieldName:'CurrentDate',
            type:'text',
            sortable: true
        }
    ];
    globalcolumns = [
        {
            label:'NewConfirmed',
            fieldName:'NewConfirmed',
            type:'number',
            sortable: true
        },
        {
            label: 'TotalConfirmed',
            fieldName: 'TotalConfirmed',
            type: 'number',
            sortable: true
        },
        {
            label: 'NewDeaths',
            fieldName: 'NewDeaths',
            type: 'number',
            sortable: true
        },
        {
            label: 'NewConfirmed',
            fieldName: 'NewConfirmed',
            type: 'number',
            sortable: true
        },
        {
            label: 'TotalDeaths',
            fieldName: 'TotalDeaths',
            type: 'number',
            sortable: true
        },
        {
            label: 'NewRecovered',
            fieldName: 'NewRecovered',
            type: 'number',
            sortable: true
        },
        {
            label:'TotalRecovered',
            fieldName:'TotalRecovered',
            type:'number',
            sortable: true
        }
    ];

    getCountrySummary(event) {
        console.log("getCOVID19-con-Summary is triggered");
        getCOVID19Summary()
            .then(result => {
                console.log("this.getCOVID19Summary" + result);
                this.countrySummary = result;
                this.errorDetails = undefined;
                this.showcountrydatatable =true;
                this.showglobaldatatable=false;
                this.showcountrydatatablecard=false;
            })
            .catch(error => {
                console.log("this.error" + error);
                this.errorDetails = error;
                this.countrySummary = undefined;
                this.showcountrydatatable =false;
                this.showglobaldatatable =false;
                this.showcountrydatatablecard=false;
            });
    }
    getGlobalSummary(event) {
        console.log("getGlobalSummary is triggered");
        getCOVID19GlobalSummary()
            .then(result => {
                console.log("this.getGlobalSummary" + result);
                this.globalSummary = result;
                this.showcountrydatatable =false;
                this.showglobaldatatable=true;
                this.errorDetails = undefined;
                this.showcountrydatatablecard=false;
            })
            .catch(error => {
                console.log("this.error" + error);
                this.errorDetails = error;
                this.globalSummary = undefined;
                this.showcountrydatatable =false;
                this.showglobaldatatable =false;
                this.showcountrydatatablecard=false;
            });
    }
    getCountrySummarycard(event){
        getCOVID19Summary()
        .then(result => {
            console.log("this.getCOVID19Summary" + result);
            this.countrySummary = result;
            this.errorDetails = undefined;
            this.showcountrydatatable =false;
            this.showglobaldatatable=false;
            this.showcountrydatatablecard=true;
        })
        .catch(error => {
            console.log("this.error" + error);
            this.errorDetails = error;
            this.countrySummary = undefined;
            this.showcountrydatatable =false;
            this.showglobaldatatable =false;
            this.showcountrydatatablecard=false;
        });
    }

    handleClear(event){
    this.showcountrydatatable=false;
    this.showglobaldatatable=false;
    this.showcountrydatatablecard=false;
    }

}