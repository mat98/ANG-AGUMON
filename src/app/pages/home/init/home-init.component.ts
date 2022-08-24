import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-home-init',
    templateUrl: './home-init.component.html',
    styleUrls: ['./home-init.component.scss']
})

export class HomeInitComponent implements OnInit {
    public array: any = [
        {
            nameProject: 'Teste 1'
        },
        {
            nameProject: 'Teste 1'
        },
        {
            nameProject: 'Teste 1'
        },
        {
            nameProject: 'Teste 1'
        },
        {
            nameProject: 'Teste 1'
        }
    ];

    constructor() {

    }

    ngOnInit(): void {

    }
}