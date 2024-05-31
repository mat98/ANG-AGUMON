import { Component, Input, OnInit, ElementRef, AfterViewInit } from "@angular/core";
import { CertificateItem } from "../certificates.model";

@Component({
    selector: 'app-detail-certificate',
    templateUrl: './detail-certificate.component.html',
    styleUrls: ['./detail-certificate.component.scss'],
})

export class DetailCertificateComponent implements OnInit, AfterViewInit {
    isLoading: boolean = false;
    color: string = "";
    img: string = "";
    years: string[] = [];
    @Input() recourse: any;
    @Input() certificateInfo!: CertificateItem[];

    constructor( private elementRef: ElementRef) {}

    ngOnInit(): void {
        this.img = this.recourse.img;

        this.years = [...new Set(this.certificateInfo.map(certified => certified.year.toString()))];
        this.years = this.years.sort((a: string, b: string) => a.localeCompare(b));
    }

    ngAfterViewInit() {
        const Boxlayout = (() => {
            const wrapper = document.body,
                sections = this.elementRef.nativeElement.querySelectorAll('section'),
                closeButtons = this.elementRef.nativeElement.querySelectorAll('.close-section'),
                expandedClass: string = "is-expandeed",
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

    redirectLinkCertificate(item: CertificateItem) {
        window.open(item.linkCertified, "_blank");
    }
}