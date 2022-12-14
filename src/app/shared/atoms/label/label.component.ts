import { Component, Input } from "@angular/core";

@Component({
    selector: "app-label",
    templateUrl: "./label.component.html",
    styleUrls: ["./label.component.scss"]
})
export class LabelComponent{
    @Input() text: string | undefined;
    @Input() color: string = "";
    @Input() size: string = "";
}