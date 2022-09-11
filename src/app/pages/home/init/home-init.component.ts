import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-home-init',
    templateUrl: './home-init.component.html',
    styleUrls: ['./home-init.component.scss']
})

export class HomeInitComponent implements OnInit {
    public array: any = [
        {
            nameProject: 'Chapmon',
            routeDetail: 'chapmon',
            img: 'https://raw.githubusercontent.com/mat98/VUEJS-CHAPMON/main/Chapmon.png',
            description: "Projeto criado para simular compra e venda de ações"
        },
        {
            nameProject: 'Greymon',
            routeDetail: 'greymon',
            img: 'http://assets.stickpng.com/thumbs/5c97c1ba87b24c0257899480.png',
            description: "Projeto criado para simular compra e venda de ações"
        }
    ];

    constructor(private _router: Router) {}

    ngOnInit(): void {

    }

    navigateToDetail(routeLink: string) {
        console.log(routeLink)
        this._router.navigate([`detail-project/${routeLink}`]);
    }
}