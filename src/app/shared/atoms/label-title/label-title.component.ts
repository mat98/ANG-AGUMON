import { Component, Input } from "@angular/core";

@Component({
    selector: "app-label-title",
    templateUrl: "./label-title.component.html",
    styleUrls: ["./label-title.component.scss"]
})
export class LabelTitleComponent{
    @Input() text: string | undefined;
}