import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "app-button",
    templateUrl: "./button.component.html",
    styleUrls: ["./button.component.scss"]
})
export class ButtonComponent {
    _label: string = "";

    @Input() label: string | undefined;
    @Output() handlerBtn: EventEmitter<any> = new EventEmitter()

    ngOnInit() {
        if (this.label) this._label = this.label;
    }

    handler() {
        console.log("opa")
        this.handlerBtn.emit('Some value to send to the parent');
    }
}