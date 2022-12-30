import { Component, forwardRef, Input, SkipSelf } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormGroup, FormGroupDirective, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'input-text-component',
  templateUrl: './input_text.component.html',
  styleUrls: ['./input_text.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: (container: ControlContainer) => container,
      deps: [[new SkipSelf(), ControlContainer]]
    }
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true
    }
  ]
})
export class InputTextComponent implements ControlValueAccessor {
  writeValue(obj: any): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
  @Input() label: string | undefined;
  @Input() value: string | undefined;
  @Input() placeholder: string = "";
  @Input() controlName: string = "";
}
