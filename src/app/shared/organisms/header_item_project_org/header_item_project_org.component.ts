import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'header-item-project-org-component',
    templateUrl: './header_item_project_org.component.html',
    styleUrls: ['./header_item_project_org.component.scss']
})
export class HeaderItemProjectOrgComponent {
    _text: string = ""

    @Input() text: string | undefined;
    @Output() loadingChange = new EventEmitter<boolean>();

    ngOnInit(): void {
        if (this.text) this._text = this.text;
    }

    onLoadingImg(): void {
        this.loadingChange.emit(false);
    }
}