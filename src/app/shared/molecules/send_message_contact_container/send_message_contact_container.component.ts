import { Component, Input } from "@angular/core";
import Swal from "sweetalert2";
import { ISendMessage } from "../../models/send_message.model";

@Component({
    selector: 'send-message-contact-container',
    templateUrl: './send_message_contact_container.component.html',
    styleUrls: ['./send_message_contact_container.component.scss']
})
export class SendMessageContactContainerComponent {
    @Input() data: ISendMessage[] = []
    @Input() msgButton: string = "";

    ngOnInit(): void {
        
    }

    sendMessage(): void {
        Swal.fire(
            {
                icon: "success",
                text: "E-mail enviado com sucesso",
                confirmButtonColor: '#3085d6',
            }
        );
    }
}