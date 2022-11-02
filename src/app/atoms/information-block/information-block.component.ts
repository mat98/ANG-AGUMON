import { Component, Input } from "@angular/core";

@Component({
    selector: "information-block-component",
    templateUrl: "./information-block.component.html",
    styleUrls: ["./information-block.component.scss"]
})
export class InformationBlockComponent {
    _icon: string = "home";
    _itemTitle: string = "Título";
    _isIconSetValid = false;
    _icon_recourses = "recourses";
    _icon_goals = "goals";
    _icon_next_steps = "next_steps";
    _fooo = "name";

    @Input() color: string | undefined;
    @Input() itemTitle: string | undefined;
    @Input() itemSubtitle: any;
    @Input() icon: string | undefined;

    ngOnInit() {
        if (this.icon) this._icon = this.icon;
        if (this.itemTitle) this._itemTitle = this.itemTitle;
    }
}