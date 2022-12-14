import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-detail-project-body",
  templateUrl: "./detail-project-body.component.html",
  styleUrls: ["./detail-project-body.component.scss"],
})

export class DetailProjectBodyComponent implements OnInit {
  ngOnInit(): void { }

  _info_title = "Chapmon Stocks"
  _imagesProject = ["/assets/images/chapmon/tela-consulta.png", "/assets/images/chapmon/tela-compra.png", "/assets/images/chapmon/tela-venda.png"]
  _textsProject = ["Tela inicial com informações básicas do sistema e o saldo da sua carteira.", "Tela de compra de ações, com opções de empresas conhecidas na bolsa americana, variando seu preço a cada virada de dia.", "Tela de venda de ações em carteira, para poder simular o lucro ou prejuizo na locação daquela ação por determinado período de tempo."]
  info = "Projeto criado para simular a compra e venda de ações na bolsa americana, inicialmente a simulação te da a opção de 10 mil doláres para realizar as compras e também a opção de que quando finalizar o dia, simular a queda ou a subida dos valores das ações."

  frequencyArray = [1, 2, 3, 4, 5, 6];

  currentBack = 0;
  currentFront = 10;
  max = 100;

  getOverlayStyle(color: string) {
    const isSemi = true;
    const transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

    return {
      top: isSemi ? 'auto' : '50%',
      bottom: isSemi ? '5%' : 'auto',
      left: '45%',
      transform,
      fontSize: 20 + 'px',
      color: color
    };
  }

  teste(event: any) {
    window.open("https://coderstocks98x.netlify.app");
  }

  teste2(event: any) {
    window.open("https://github.com/mat98/VUE-CHAPMON");
  }
}