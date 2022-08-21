import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contactme-init',
  templateUrl: './contact-me-init.component.html',
  styleUrls: ['./contact-me-init.component.scss'],
})
export class ContactMeInitComponent implements OnInit {
  isLoading: boolean = false;
  form: FormGroup;

  constructor(private _fb: FormBuilder, private _location: Location) {
    this.form = this._fb.group({
      captureDate: [null],
    });
  }

  ngOnInit(): void {}
}
