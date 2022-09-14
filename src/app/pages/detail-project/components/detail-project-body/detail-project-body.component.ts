import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-detail-project-body",
    templateUrl: "./detail-project-body.component.html",
    styleUrls: ["./detail-project-body.component.scss"],
})

export class DetailProjectBodyComponent implements OnInit {
    ngOnInit(): void { }

    frequencyArray = [1, 2, 3, 4, 5, 6];
}