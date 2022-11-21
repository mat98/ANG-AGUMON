import { Component, Input } from "@angular/core";

@Component({
    selector: "input-text-component",
    templateUrl: "./input_text.component.html",
    styleUrls: ["./input_text.component.scss"]
})
export class InputTextComponent{
    _label: string = "";
    _value: string = "";

    @Input() label: string | undefined;
    @Input() value: string | undefined;

    ngOnInit() {
        if (this.label) this._label = this.label;
        if (this.value) this._value = this.value;
    }
}