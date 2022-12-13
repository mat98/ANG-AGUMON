import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
})

export class SkillsComponent implements OnInit {
    isLoading: boolean = false;
    teste = [
        {
            "max": 100,
            "current": 80,
            "text": "HTML"
        },
        {
            "max": 100,
            "current": 70,
            "text": "CSS",
        },
        {
            "max": 100,
            "current": 70,
            "text": "Javascript",
        },
        {
            "max": 100,
            "current": 60,
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
            "current": 60,
            "text": "Nodejs",
        },
        {
            "max": 100,
            "current": 40,
            "text": "Vuejs"
        },
    ];


    ngOnInit(): void {

    }
}