import { Component, OnInit } from '@angular/core';
import { ProjectsHome } from '../projects.model';

@Component({
  selector: 'app-home-init',
  templateUrl: './home-init.component.html',
  styleUrls: ['./home-init.component.scss'],
})
export class HomeInitComponent implements OnInit {
  projects = [
    {
      nameProject: 'Chapmon',
      routeDetail: 'chapmon',
      img: 'https://cdn.dribbble.com/users/1044634/screenshots/14833409/media/9daaf6db84d0e5c8a4a4545db7ee4006.jpg?compress=1&resize=1000x750&vertical=top',
      description: 'Projeto criado para simular compra e venda de ações',
      digivice: '/assets/images/digivice-green.png',
    },
  ];

  projectsCopy: ProjectsHome[];
  searchText: string = "";

  constructor() {
    this.projectsCopy = JSON.parse(JSON.stringify(this.projects))
  }
  
  ngOnInit(): void { }

  find() {
    // retorna o primeiro indice que pode ser encontrado no array, caso nao tenha item na lista, retorna -1
    this.projectsCopy = this.projects.filter(item => {
      return item.nameProject.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1
    });
  }
}
