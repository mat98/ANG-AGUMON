import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ISendMessage } from 'src/app/shared/models/send_message.model';
import { ContactMeService } from '../contact-me.service';

@Component({
  selector: 'app-contactme-init',
  templateUrl: './contact-me-init.component.html',
  styleUrls: ['./contact-me-init.component.scss'],
})
export class ContactMeInitComponent implements OnInit {
  isLoading: boolean = false;
  form: UntypedFormGroup;
  formDescription: any = {
    name: 'Nome',
    emailAddress: 'Email de contato',
    subjectContact: 'Assunto',
    messageContact: 'Mensagem',
  };
  itensSendEmail: ISendMessage[] = [];

  labelMap = 'Criando linhas de código em São Paulo!';
  contactMe = 'Hey, Mande uma mensagem!';
  btnSendMessage = 'Enviar Mensagem';
  headerContact = 'Parcerias';
  numberConnection = '2';
  textConnection = 'Conexões realizadas a partir do meio de contato';

  constructor(private _fb: UntypedFormBuilder, private _contactService: ContactMeService) {
    this.form = this._fb.group({
      captureDate: [null],
    });
  }

  ngOnInit(): void {
    this.generateForm()

    this.itensSendEmail.push(
      {
        label: this.formDescription.name,
        placeholder: ""
      },
      {
        label: this.formDescription.emailAddress,
        placeholder: ""
      },
      {
        label: this.formDescription.subjectContact,
        placeholder: ""
      },
      {
        label: this.formDescription.messageContact,
        placeholder: ""
      }
    )
  }

  private generateForm() {
    this.form = this._fb.group({
      name: [null, Validators.required],
    });
  }
}
