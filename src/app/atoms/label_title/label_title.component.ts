import { Component, Input } from "@angular/core";

@Component({
    selector: "label-title-component",
    templateUrl: "./label_title.component.html",
    styleUrls: ["./label_title.component.scss"]
})
export class LabelTitleComponent{
    _text: string = "";

    @Input() text: string | undefined;

    ngOnInit() {
        if (this.text) this._text = this.text;
    }
}