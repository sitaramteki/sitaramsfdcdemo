import { LightningElement } from 'lwc';
import Declaration from '@salesforce/label/c.Declaration';
import Disclaimer from '@salesforce/label/c.Disclaimer';
import WelcomeMessage from '@salesforce/label/c.WelcomeMessage';
export default class AccessLabel extends LightningElement {
    label = { Declaration, Disclaimer, WelcomeMessage };
}