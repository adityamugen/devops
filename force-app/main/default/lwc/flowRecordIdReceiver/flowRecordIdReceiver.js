import { LightningElement, api } from 'lwc';

export default class FlowRecordIdReceiver extends LightningElement {
    @api recordId; // receives value from Flow

    connectedCallback() {
        console.log('Record Id from Flow:', this.recordId);
    }
}