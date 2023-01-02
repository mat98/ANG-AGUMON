import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";

@Component({
    selector: "app-detail-project-header",
    templateUrl: "./detail-project-header.component.html",
    styleUrls: ["./detail-project-header.component.scss"],
})

export class DetailProjectHeaderComponent implements OnInit, OnDestroy {
    @Input() title = ''
    @Output() loadingChange = new EventEmitter<boolean>();
    
    ngOnInit(): void { }

    ngOnDestroy(): void { }

    loadingChangeImg(): void {
        this.loadingChange.emit(false);
    }
}