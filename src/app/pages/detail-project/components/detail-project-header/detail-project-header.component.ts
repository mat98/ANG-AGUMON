import { Component, Input, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector: "app-detail-project-header",
    templateUrl: "./detail-project-header.component.html",
    styleUrls: ["./detail-project-header.component.scss"],
})

export class DetailProjectHeaderComponent implements OnInit, OnDestroy {
    @Input() title = ''
    ngOnInit(): void { }

    ngOnDestroy(): void { }
}