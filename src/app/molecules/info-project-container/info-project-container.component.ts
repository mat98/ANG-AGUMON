import { Component, Input } from "@angular/core";

@Component({
    selector: "app-info-project-container",
    templateUrl: "./info-project-container.component.html",
    styleUrls: ["./info-project-container.component.scss"]
})
export class InfoProjectContainerComponent {
    _info_title: string = "";
    _text: string = "";

    @Input() text: string | undefined;
    @Input() info_title: string | undefined;

    ngOnInit() {
        if (this.text) this._text = this.text;
        if (this.info_title) this._info_title = this.info_title;
    }
}