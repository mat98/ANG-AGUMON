import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
})

export class SkillsComponent implements OnInit {
    isLoading: boolean = false;
    skills = [
        {
            "max": 100,
            "current": 80,
            "text": "HTML"
        },
        {
            "max": 100,
            "current": 75,
            "text": "CSS",
        },
        {
            "max": 100,
            "current": 75,
            "text": "Javascript",
        },
        {
            "max": 100,
            "current": 75,
            "text": "Angular"
        },
        {
            "max": 100,
            "current": 75,
            "text": "Flutter",
        },
        {
            "max": 100,
            "current": 60,
            "text": "Dotnet"
        },
        {
            "max": 100,
            "current": 50,
            "text": "Nodejs",
        },
        {
            "max": 100,
            "current": 50,
            "text": "Vuejs"
        },
    ];


    ngOnInit(): void {
        window.scrollTo(0, 0);
    }
}