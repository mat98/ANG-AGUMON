import { Component, OnInit } from '@angular/core';
import { TimelineElement } from 'src/app/core/components/horizontal-timeline/timeline-element';

@Component({
    selector: 'app-professional-exp',
    templateUrl: './professional-exp-body.component.html',
    styleUrls: ['./professional-exp-body.component.scss'],
})

export class ProfessionalExpBodyComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    content7COMm = `Onde tudo começou... 🚀 Iniciei minha carreira como desenvolvedor a partir da 7COMm, onde abriu minhas portas acreditando no meu potencial,
  entrei para uma vaga de estagiário, onde atuei em um programa de reconhecimento de funcionários, onde serviu com uma base de grande aprendizado,
  trabalhei com tecnologias como AngularJS no frontend (sim o Angular 1) rs, e também com o Nodejs no backend.`;

    contentTalent = `Em busca de novos desafios, migrei para uma nova empresa, também sendo uma consultoria atuei junto ao cliente Qualicorp, onde encontrei
  um desafio enorme que seria criar um sistema para venda de planos de saúde, tive meu primeiro contato profissional com tecnologias Mobile, atuando em Flutter,
  onde me apaixonei por esse mundo ( inclusive meus planos é criar meu portifólio também em um aplicativo), além disso atuei no backend de novos recursos, além do
  site de vendas utilizando o Vuejs.`;

    content7COMm2 = `Em construção 👷`;

    timeline: TimelineElement[] = [
        {
            caption: '19 Ago',
            date: new Date(2019, 8, 16),
            selected: true,
            title: '7COMm',
            content: this.content7COMm,
        },
        {
            caption: '20 Ago',
            date: new Date(2020, 8, 20),
            title: 'Talent',
            content: this.contentTalent,
        },
        {
            caption: '17 Fev',
            date: new Date(2022, 2, 17),
            title: '7COMm',
            content: this.content7COMm2,
        },
    ];

    load() {
        this.timeline = [
            {
                caption: '19 Ago',
                date: new Date(2019, 8, 16),
                selected: true,
                title: '7COMm',
                content: this.content7COMm,
            },
            {
                caption: '20 Ago',
                date: new Date(2020, 8, 20),
                title: 'Talent',
                content: this.contentTalent,
            },
            {
                caption: '17 Fev',
                date: new Date(2022, 2, 17),
                title: '7COMm',
                content: this.content7COMm2,
            },
        ];
    }
}