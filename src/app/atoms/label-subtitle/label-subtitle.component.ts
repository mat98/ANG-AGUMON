import { Component, Input } from "@angular/core";

@Component({
    selector: "app-label-subtitle",
    templateUrl: "./label-subtitle.component.html",
    styleUrls: ["./label-subtitle.component.scss"]
})
export class LabelSubtitleComponent {
    _text: string = "";

    @Input() text: string | undefined;

    ngOnInit() {
        if (this.text) this._text = this.text;
    }
}