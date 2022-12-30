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
        //     case 'nodejs':
        //         this.color = "#90c53f";
        //         this.img = "https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png"
        //         break;
        //     case 'vuejs':
        //         this.color = "#399d79";
        //         this.img = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
        //         break;
        //     case 'corda':
        //         this.color = "#b00027";
        //         this.img = "https://s3.cointelegraph.com/storage/uploads/view/df72564418f401cce36ff1f3329126cd.png"
        //         break;

        //     default:
        //         break;
        // }
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

    redirectLinkCertificate(item: CertificateItem) {
        window.open(item.linkCertified, "_blank");
    }
}