import { Component, Input } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ContactMeService } from "src/app/pages/contact-me/contact-me.service";
import Swal from "sweetalert2";
import { ISendMessage } from "../../models/send_message.model";

@Component({
    selector: 'send-message-contact-container',
    templateUrl: './send_message_contact_container.component.html',
    styleUrls: ['./send_message_contact_container.component.scss']
})
export class SendMessageContactContainerComponent {
    formSendEmail!: FormGroup;
    loadingSendEmail: boolean = false;
    @Input() data: ISendMessage[] = []
    @Input() msgButton: string = "";

    constructor(private _contactService: ContactMeService) {
        this.generateForm();
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
            this.sendEmail();
        } else {
            this.formSendEmail.markAllAsTouched();
        }
    }

    private sendEmail(): void {
        this.loadingSendEmail = true;
        this.disabledFields();
        this._contactService.sendEmail(this.formSendEmail.value).subscribe({
            next: (_: any) => {
                Swal.fire(
                    {
                        icon: "success",
                        text: "E-mail enviado com sucesso",
                        confirmButtonColor: '#3085d6',
                    }
                );

                this.formSendEmail.markAsUntouched();
                this.formSendEmail.reset();
                this.formSendEmail.clearValidators();
            },
            error: (resp: any) => {
                console.log("resp-error: ", resp)
                Swal.fire(
                    {
                        icon: "error",
                        text: "Erro ao enviar email",
                        confirmButtonColor: '#d92121',
                    }
                );
            }
        })
        .add(() => this.hideLoaders());;
    }

    private disabledFields(): void {
        this.formSendEmail.controls['name'].disable();
        this.formSendEmail.controls['email'].disable();
        this.formSendEmail.controls['subject'].disable();
        this.formSendEmail.controls['message'].disable();
    }

    private enabledFields(): void {
        this.formSendEmail.controls['name'].enable();
        this.formSendEmail.controls['email'].enable();
        this.formSendEmail.controls['subject'].enable();
        this.formSendEmail.controls['message'].enable();
    }

    hideLoaders(): void {
        this.loadingSendEmail = false;
        this.enabledFields();
    }
}