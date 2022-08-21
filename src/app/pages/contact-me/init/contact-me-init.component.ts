import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contactme-init',
  templateUrl: './contact-me-init.component.html',
  styleUrls: ['./contact-me-init.component.scss'],
})
export class ContactMeInitComponent implements OnInit {
  isLoading: boolean = false;
  form: FormGroup;
  formDescription: any = {
    name: 'Nome',
    emailAddress: 'Email de contato',
    subjectContact: 'Assunto',
    messageContact: 'Mensagem',
  };

  labelMap = 'Criando linhas de código em São Paulo 🌆';
  contactMe = 'Hey, Mande uma mensagem!';
  btnSendMessage = 'Enviar Mensagem';
  headerContact = 'Parcerias';
  numberConnection = '2';
  textConnection = 'Conexões realizadas a partir do meio de contato';

  constructor(private _fb: FormBuilder, private _location: Location) {
    this.form = this._fb.group({
      captureDate: [null],
    });
  }

  ngOnInit(): void {
    this.generateForm()
  }

  private generateForm() {
    this.form = this._fb.group({
      name: [null, Validators.required],
    });
  }
}
