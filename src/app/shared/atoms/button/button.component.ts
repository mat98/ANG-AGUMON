import { Component, Input } from "@angular/core";

@Component({
    selector: "app-button",
    templateUrl: "./button.component.html",
    styleUrls: ["./button.component.scss"]
})
export class ButtonComponent {
    _label: string = "";

    @Input() label: string | undefined;

    ngOnInit() {
        if (this.label) this._label = this.label;
    }
}