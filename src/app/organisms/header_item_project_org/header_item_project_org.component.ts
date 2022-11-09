import { Component, Input } from "@angular/core";

@Component({
    selector: 'header-item-project-org-component',
    templateUrl: './header_item_project_org.component.html',
    styleUrls: ['./header_item_project_org.component.scss']
})
export class HeaderItemProjectOrgComponent {
    _text: string = ""

    @Input() text: string | undefined;

    ngOnInit(): void {
        if (this.text) this._text = this.text;
    }
}