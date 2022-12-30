import { Component, Input } from "@angular/core";
import { ISendMessage } from "../../models/send_message.model";

@Component({
    selector: 'info-contact-org',
    templateUrl: './info_contact_org.component.html',
    styleUrls: ['./info_contact_org.component.scss']
})
export class InformationContactOrgComponent {
    _name = ""
    _email = ""
    _subject = ""
    _message = ""
    _sendMessage = "Enviar Mensagem"

    itensSendEmail: ISendMessage[] = [];

    @Input() name: string = "";
    @Input() email: string = "";
    @Input() subject: string = "";
    @Input() message: string = "";
    @Input() sendMessage: string = "";

    ngOnInit() {
        this.itensSendEmail.push(
            {
                label: this.name,
                placeholder: ""
            },
            {
                label: this.email,
                placeholder: ""
            },
            {
                label: this.subject,
                placeholder: ""
            },
            {
                label: this.message,
                placeholder: ""
            }
        )
        // if (this.name) this._name = this.name;
        // if (this.email) this._email = this.email;
        // if (this.subject) this._subject = this.subject;
        // if (this.message) this._message = this.message;
        if (this.sendMessage) this._sendMessage = this.sendMessage;
    }
}