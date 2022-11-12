import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-detail-project-body",
    templateUrl: "./detail-project-body.component.html",
    styleUrls: ["./detail-project-body.component.scss"],
})

export class DetailProjectBodyComponent implements OnInit {
    ngOnInit(): void { }

    _info_title = "Cod3r - Compra e Venda de Ações"
    info = "Projeto criado para simular a compra e venda de ações brasileiras vinculados a B3, inicialmente a simulação te da a opção de 10 mil reais para realizar as compras e também a opção de que quando finalizar o dia, simular a queda ou a subida dos valores das ações."

    frequencyArray = [1, 2, 3, 4, 5, 6];
}