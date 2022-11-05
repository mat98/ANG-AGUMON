import { Component, Input } from "@angular/core";

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

    @Input() name: string | undefined;
    @Input() email: string | undefined;
    @Input() subject: string | undefined;
    @Input() message: string | undefined;
    @Input() sendMessage: string | undefined;

    ngOnInit() {
        if (this.name) this._name = this.name;
        if (this.email) this._email = this.email;
        if (this.subject) this._subject = this.subject;
        if (this.message) this._message = this.message;
        if (this.sendMessage) this._sendMessage = this.sendMessage;
    }
}