import { LightningElement, wire } from 'lwc';
import FindAllProducts from '@salesforce/apex/ProductManager.FindAllProducts';
export default class ProductmasterDisplay extends LightningElement {
    allProducts;
    errorDetails;
    @wire(FindAllProducts)
    processAllProducts({ error, data }) {
        if (data) {
            this.allProducts = data;

        } else if (error) {
            this.errorDetails = error;

        }

    }
}