import { Component, Input } from "@angular/core";

@Component({
    selector: 'information-block-container',
    templateUrl: './information_block_container.component.html',
    styleUrls: ['./information_block_container.component.scss']
})
export class InformationBlockContainerComponent {
    @Input() color: string | undefined;
    technologys: any = [
        "- Babel",
        "- Axios",
        "- Express",
        "- Vuetify",
    ];
    objective: any = ["TODO"]
    nextStep: any = ["TODO"]
    // technologys: string = "Babel\n-Axios \n | Express \n| Vuetify";

    constructor() { }

    ngOnInit(): void { }
}