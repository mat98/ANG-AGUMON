import { Component, Input } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import Swal from "sweetalert2";
import { ISendMessage } from "../../models/send_message.model";

@Component({
    selector: 'send-message-contact-container',
    templateUrl: './send_message_contact_container.component.html',
    styleUrls: ['./send_message_contact_container.component.scss']
})
export class SendMessageContactContainerComponent {
    formSendEmail!: FormGroup;
    @Input() data: ISendMessage[] = []
    @Input() msgButton: string = "";

    constructor() {
        this.generateForm()
    }

    generateForm(): void {
        this.formSendEmail = new FormGroup({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)]),
            subject: new FormControl('', [Validators.required]),
            message: new FormControl('', [Validators.required]),
        })
    }

    sendMessage(): void {
        if (this.formSendEmail.valid) {
            Swal.fire(
                {
                    icon: "success",
                    text: "E-mail enviado com sucesso",
                    confirmButtonColor: '#3085d6',
                }
            );
        } else {
            this.formSendEmail.markAllAsTouched();
        }
    }

    clearFilters(): void {
        // formDirective.resetForm();
        // this.form.reset();
    }
}