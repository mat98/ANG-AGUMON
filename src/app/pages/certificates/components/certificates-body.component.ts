import { ChangeDetectorRef, Component, ElementRef, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-certificates-body',
    templateUrl: './certificates-body.component.html',
    styleUrls: ['./certificates-body.component.scss'],
})

export class CertificatesBodyComponent implements OnInit {
    isLoading: boolean = false;
    items = [
        {
            'id': 1,
            'img': "https://growiz.com.br/wp-content/uploads/2020/08/kisspng-c-programming-language-logo-microsoft-visual-stud-atlas-portfolio-5b899192d7c600.1628571115357423548838.png",
            'text': 'dotnet',
            'enabledDetail': false
        },
        {
            'id': 2,
            'img': "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png",
            'text': 'angular',
            'enabledDetail': false
        }

    ]

    constructor(private _router: Router, private elementRef: ElementRef, private changeDetection: ChangeDetectorRef) {
    }

    ngOnInit(): void {
    }

    navigateCertificate(recourse: string): void {
        this._router.navigate(['certificates', recourse]);
    }

    ngAfterViewInit() {
        const Boxlayout = (() => {
            const wrapper = document.body,
                sections = this.elementRef.nativeElement.querySelectorAll('section'),
                closeButtons = this.elementRef.nativeElement.querySelectorAll('.close-section'),
                expandedClass: string = "is-expanded",
                hasExpandedClass: string = "has-expanded-item";

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

    handleEnabledDetail(item: any): void {
        item.enabledDetail = !item.enabledDetail;
    }

    closeDetail():void {
        this.items.map(i => i.enabledDetail = false);
    }

    checkDetail(): boolean {
        return this.items.every(i => i.enabledDetail === false);
    }
}