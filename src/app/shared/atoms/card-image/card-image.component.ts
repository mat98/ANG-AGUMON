import { Component, Input } from "@angular/core";

@Component({
    selector: "app-card-image-component",
    templateUrl: "./card-image.component.html",
    styleUrls: ["./card-image.component.scss"]
})
export class CardImageComponent {
    _src: string = "";
    _alt: string = "";
    
    @Input() src: string | undefined;
    @Input() alt: string | undefined;

    ngOnInit() {
        if (this.src) this._src = this.src;
        if (this.alt) this._alt = this.alt;
    }
}