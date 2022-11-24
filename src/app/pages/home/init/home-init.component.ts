import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-init',
  templateUrl: './home-init.component.html',
  styleUrls: ['./home-init.component.scss'],
})
export class HomeInitComponent implements OnInit {
  public array: any = [
    {
      nameProject: 'Chapmon',
      routeDetail: 'chapmon',
      img: 'https://cdn.dribbble.com/users/1044634/screenshots/14833409/media/9daaf6db84d0e5c8a4a4545db7ee4006.jpg?compress=1&resize=1000x750&vertical=top',
      description: 'Projeto criado para simular compra e venda de ações',
    },
  ];

  ngOnInit(): void {}
}
