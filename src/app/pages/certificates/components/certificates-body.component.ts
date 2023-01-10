import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { CertificateItem } from "../certificates.model";

@Component({
    selector: 'app-certificates-body',
    templateUrl: './certificates-body.component.html',
    styleUrls: ['./certificates-body.component.scss'],
})

export class CertificatesBodyComponent implements OnInit {
    isLoading: boolean = false;
    items = [
        {
            'id': "dotnet",
            'img': "https://growiz.com.br/wp-content/uploads/2020/08/kisspng-c-programming-language-logo-microsoft-visual-stud-atlas-portfolio-5b899192d7c600.1628571115357423548838.png",
            'text': "Dotnet",
            'enabledDetail': false
        },
        {
            'id': "angular",
            'img': "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png",
            'text': "Angular",
            'enabledDetail': false
        },
        {
            'id': "flutter",
            'img': "https://static-00.iconduck.com/assets.00/flutter-icon-413x512-4picx6vy.png",
            'text': "Flutter",
            'enabledDetail': false
        },
        {
            'id': "r3Corda",
            'img': "https://images2.imgbox.com/30/a1/8nSTUX38_o.png",
            'text': "R3 Corda",
            'enabledDetail': false
        }
    ]
    itemsDefault: any;
    detailEnabled = true;
    @Input() certificateInfo!: CertificateItem[];
    @Output() loadingChangeImg = new EventEmitter<boolean>();

    constructor(private _router: Router, private elementRef: ElementRef, private changeDetection: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.itemsDefault = this.items;
    }

    navigateCertificate(recourse: string): void {
        this._router.navigate(['certificates', recourse]);
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

    handleEnabledDetail(item: any): void {
        item.enabledDetail = !item.enabledDetail;
        this.changeDetection.detectChanges();
    }

    handleSectionEnabled(itemSelected: any): boolean {
        let allFalse: boolean = this.items.every(i => i.enabledDetail === false);
        if (allFalse) return allFalse;

        // var item = this.items.find(i => i.enabledDetail && i.id == index);
        var item = this.items.find(i => i.enabledDetail && i === itemSelected);
        return item != null;
    }

    closeDetail(): void {
        this.items.forEach(i => i.enabledDetail = false);
    }

    getFilterShadow(choice: string) {
        switch (choice) {
            case 'dotnet':
                return { 'filter': 'drop-shadow(0 0 0.9rem #732a6f)' }
            case 'angular':
                return { 'filter': 'drop-shadow(0 0 0.9rem #b70029)' }
            case 'flutter':
                return { 'filter': 'drop-shadow(0 0 0.9rem #45d1fd)' }
            case 'r3Corda':
                return { 'filter': 'drop-shadow(0 0 0.9rem #b70029)' }
        }
        return { 'filter': 'drop-shadow(0 0 0.9rem blue)' }
    }

    getCertificatesByRecourse(recourse: string): CertificateItem[] {
        return this.certificateInfo.filter(certified => certified.technology === recourse);
    }

    onLoadingImg(): void {
        this.loadingChangeImg.emit(false);
    }
}