import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-detail-project-body",
    templateUrl: "./detail-project-body.component.html",
    styleUrls: ["./detail-project-body.component.scss"],
})

export class DetailProjectBodyComponent implements OnInit {
    ngOnInit(): void { }

    _info_title = "Cod3r - Compra e Venda de Ações"
    _imagesProject = ["/assets/images/chapmon/tela-consulta.png", "/assets/images/chapmon/tela-compra.png", "/assets/images/chapmon/tela-venda.png"]
    _textsProject = ["Tela inicial com informações básicas do sistema e o saldo da sua carteira.", "Tela de compra de ações, com opções de empresas conhecidas na bolsa americana, variando seu preço a cada virada de dia.", "Tela de venda de ações em carteira, para poder simular o lucro ou prejuizo na locação daquela ação por determinado período de tempo."]
    info = "Projeto criado para simular a compra e venda de ações na bolsa americana, inicialmente a simulação te da a opção de 10 mil doláres para realizar as compras e também a opção de que quando finalizar o dia, simular a queda ou a subida dos valores das ações."

    frequencyArray = [1, 2, 3, 4, 5, 6];
}