import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "app-button",
    templateUrl: "./button.component.html",
    styleUrls: ["./button.component.scss"]
})
export class ButtonComponent {
    @Input() label: string = "";
    @Input() disabled: boolean = false;
    @Input() loading: boolean = false;
    @Output() handlerBtn: EventEmitter<any> = new EventEmitter()

    ngOnInit() {}

    handler() {
        this.handlerBtn.emit('Some value to send to the parent');
    }
}