import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-skills-body',
    templateUrl: './skills-body.component.html',
    styleUrls: ['./skills-body.component.scss'],
})

export class SkillsBodyComponent implements OnInit {
    isLoading: boolean = false;

    ngOnInit(): void {
      
    }
}