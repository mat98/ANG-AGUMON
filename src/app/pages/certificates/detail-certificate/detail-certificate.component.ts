import { Component, Input, OnInit, ElementRef, AfterViewInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-detail-certificate',
    templateUrl: './detail-certificate.component.html',
    styleUrls: ['./detail-certificate.component.scss'],
})

export class DetailCertificateComponent implements OnInit, AfterViewInit {
    isLoading: boolean = false;
    color: string = "";
    img: string = "";
    @Input() recourse: string = "";

    constructor(private _activateRoute: ActivatedRoute, private elementRef: ElementRef) {

    }

    ngOnInit(): void {
        var key = this.recourse;
        switch (key) {
            case 'dotnet':
                // this.color = "#732a6f";
                this.img = "https://growiz.com.br/wp-content/uploads/2020/08/kisspng-c-programming-language-logo-microsoft-visual-stud-atlas-portfolio-5b899192d7c600.1628571115357423548838.png"
                break;
            case 'angular':
                // this.color = "#b70029";
                this.img = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"
                break;
            case 'flutter':
                this.color = "#45d1fd";
                this.img = "https://archive.org/download/github.com-flutter-flutter_-_2022-02-08_11-18-30/cover.jpg"
                break;
            case 'nodejs':
                this.color = "#90c53f";
                this.img = "https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png"
                break;
            case 'vuejs':
                this.color = "#399d79";
                this.img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
                break;
            case 'corda':
                this.color = "#b00027";
                this.img = "https://s3.cointelegraph.com/storage/uploads/view/df72564418f401cce36ff1f3329126cd.png"
                break;

            default:
                break;
        }
    }

    ngAfterViewInit() {
        const Boxlayout = (() => {
            const wrapper = document.body,
                sections = this.elementRef.nativeElement.querySelectorAll('section'),
                closeButtons = this.elementRef.nativeElement.querySelectorAll('.close-section'),
                expandedClass: string = "is-expanded",
                hasExpandedClass: string = "has-expanded-item";

            console.log(sections)
            console.log(closeButtons);
            const initEvents = () => {
                sections.forEach((element: any) => {
                    element.addEventListener("click", () => openSection(element));
                });
                closeButtons.forEach((element: any) => {
                    element.addEventListener("click", (event: any) => {
                        event.stopPropagation();
                        closeSection(element.parentElement);
                    });
                });
            };

            const openSection = (element: any) => {
                if (element.classList.contains(expandedClass)) return;
                element.classList.add(expandedClass);
                wrapper.classList.add(hasExpandedClass);
            };

            const closeSection = (element: any) => {
                if (!element.classList.contains(expandedClass)) return;
                element.classList.remove(expandedClass);
                wrapper.classList.remove(hasExpandedClass);
            };

            return { init: initEvents };
        })();

        Boxlayout.init();
    }


}