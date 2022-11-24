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
      digivice: '/assets/images/digivice-green.png',
    },
    {
      nameProject: 'Digi 1',
      routeDetail: 'chapmon',
      img: 'https://cdn.dribbble.com/userupload/4051095/file/original-04d6462f5ce027382444a8fd686e5970.jpg?compress=1&resize=1024x768',
      description: 'Teste',
      digivice: '/assets/images/digivice-green.png',
    },
    {
      nameProject: 'Digi 2',
      routeDetail: 'chapmon',
      img: 'https://cdn.dribbble.com/userupload/4051099/file/original-3755dc5bc2bb88d7df026c83af9ac237.png?compress=1&resize=1024x768',
      description: 'Projeto criado para simular compra e venda de ações',
      digivice: '/assets/images/digivice-green.png',
    },
    {
      nameProject: 'Digi 3',
      routeDetail: 'chapmon',
      img: 'https://cdn.dribbble.com/userupload/3990272/file/original-370ded31781cce39542695064c430e5d.png?compress=1&resize=1024x768',
      description: 'Projeto criado para simular compra e venda de ações',
      digivice: '/assets/images/digivice-green.png',
    },
    {
      nameProject: 'Digi 4',
      routeDetail: 'chapmon',
      img: 'https://cdn.dribbble.com/userupload/3232136/file/original-0fd4209ff091851842570400d634352b.png?compress=1&resize=1024x768',
      description: 'Projeto criado para simular compra e venda de ações',
      digivice: '/assets/images/digivice-green.png',
    },
  ];

  ngOnInit(): void {}
}
