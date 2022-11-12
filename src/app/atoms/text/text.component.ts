import { Component, Input } from "@angular/core";

@Component({
    selector: "app-text",
    templateUrl: "./text.component.html",
    styleUrls: ["./text.component.scss"]
})
export class TextComponent {
    _text: string = "";

    @Input() text: string | undefined;

    ngOnInit() {
        if (this.text) this._text = this.text;
    }
}