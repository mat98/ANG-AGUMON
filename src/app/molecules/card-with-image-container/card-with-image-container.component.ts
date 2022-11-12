import { Component, Input } from "@angular/core";

@Component({
    selector: "app-card-with-image-container",
    templateUrl: "./card-with-image-container.component.html",
    styleUrls: ["./card-with-image-container.component.scss"]
})
export class CardWithImageContainerComponent {
    _text: string = "";

    @Input() text: string | undefined;

    ngOnInit() {
        if (this.text) this._text = this.text;
    }
}