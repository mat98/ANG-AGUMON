import { Component, Input } from "@angular/core";

@Component({
    selector: "app-detail-about-project-org",
    templateUrl: "./detail-about-project-org.component.html",
    styleUrls: ["./detail-about-project-org.component.scss"]
})
export class DetailAboutProjectOrgComponent {
    _info_title: string = "";
    _text: string = "";
    _imagesProject: string[]= [];
    _textsProjects: string[]= [];

    @Input() text: string | undefined;
    @Input() info_title: string | undefined;
    @Input() imagesProject: string[] | undefined;
    @Input() textsProjects: string[] | undefined;
    
    ngOnInit() {
        if (this.text) this._text = this.text;
        if (this.info_title) this._info_title = this.info_title;
        if (this.imagesProject) this._imagesProject = this.imagesProject;
        if (this.textsProjects) this._textsProjects = this.textsProjects;
    }
}