import { Component, Input } from "@angular/core";

@Component({
    selector: 'label-title-center-container',
    templateUrl: './label_title_center_container.component.html',
    styleUrls: ['./label_title_center_container.component.scss']
})
export class LabelTitleCenterContainer {
    _text: string = ""

    @Input() text: string | undefined;

    ngOnInit(): void {
        if (this.text) this._text = this.text;
    }
}