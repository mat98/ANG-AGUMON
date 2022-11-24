import { Component, Input } from "@angular/core";

@Component({
    selector: 'input-contact-container',
    templateUrl: './input_contact_container.component.html',
    styleUrls: ['./input_contact_container.component.scss']
})
export class InputContactContainer {
    _labelRight: string = ""
    _labelLeft: string = ""

    @Input() labelRight: string | undefined;
    @Input() placeholderRight: string = '';
    @Input() labelLeft: string | undefined;
    @Input() placeholderLeft: string = '';

    ngOnInit(): void {
        if (this.labelRight) this._labelRight = this.labelRight;
        if (this.labelLeft) this._labelLeft = this.labelLeft;
    }
}