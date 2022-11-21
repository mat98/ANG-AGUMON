import { Component, Input } from "@angular/core";

@Component({
    selector: 'send-message-contact-container',
    templateUrl: './send_message_contact_container.component.html',
    styleUrls: ['./send_message_contact_container.component.scss']
})
export class SendMessageContactContainerComponent {
    _label: string = ""

    @Input() label: string | undefined;

    ngOnInit(): void {
        if (this.label) this._label = this.label;
    }
}