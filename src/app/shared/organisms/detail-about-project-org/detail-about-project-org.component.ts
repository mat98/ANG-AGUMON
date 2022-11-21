import { Component, Input } from "@angular/core";

@Component({
    selector: "app-detail-about-project-org",
    templateUrl: "./detail-about-project-org.component.html",
    styleUrls: ["./detail-about-project-org.component.scss"]
})
export class DetailAboutProjectOrgComponent {
    @Input() text: string | undefined;
    @Input() infoTitle: string | undefined;
    @Input() imagesProject: string[] = [];
    @Input() textsProjects: string[] = [];
}