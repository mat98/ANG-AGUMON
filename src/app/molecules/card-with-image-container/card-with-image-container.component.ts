import { Component, Input } from "@angular/core";

@Component({
    selector: "app-card-with-image-container",
    templateUrl: "./card-with-image-container.component.html",
    styleUrls: ["./card-with-image-container.component.scss"]
})
export class CardWithImageContainerComponent {
    _text: string = "";
    _src: string = "";

    @Input() text: string | undefined;
    @Input() image: string | undefined;

    ngOnInit() {
        if (this.text) this._text = this.text;
        if (this.image) this._src = this.image;
    }
}