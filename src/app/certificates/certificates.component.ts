import { Router } from '@angular/router';
import { CertificateItem } from './certificates.model';
import { CertificateService } from './certificates.service';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
})
export class CertificatesComponent implements OnInit {
  isLoading: boolean = false;
  pageNumber = 1;
  pageSize = 10;
  lengthForPagination = 0;
  certificateInfo: CertificateItem[] = [];
  itemsDefault: any;
  detailEnabled = true;

  items = [
    {
      id: 'dotnet',
      img: 'https://cdn3.iconfinder.com/data/icons/monitors-with-programming-languages/512/cc-2-256.png',
      text: 'Dotnet',
      enabledDetail: false,
    },
    {
      id: 'angular',
      img: 'https://cdn3.iconfinder.com/data/icons/logos-3/250/angular-256.png',
      text: 'Angular',
      enabledDetail: false,
    },
    {
      id: 'flutter',
      img: 'https://cdn2.iconfinder.com/data/icons/boxicons-logos/24/bxl-flutter-256.png',
      text: 'Flutter',
      enabledDetail: false,
    },
    {
      id: 'r3Corda',
      img: 'https://images2.imgbox.com/30/a1/8nSTUX38_o.png',
      text: 'R3 Corda',
      enabledDetail: false,
    },
  ];

  ngOnInit(): void {
    this.isLoading = true;
    this.getCertificates();
  }

  constructor(
    private _certificatesService: CertificateService,
    private elementRef: ElementRef,
    private _router: Router,
    private changeDetection: ChangeDetectorRef
  ) {}

  private getCertificates(): void {
    this._certificatesService
      .getCertificates(this.pageNumber, this.pageSize)
      .subscribe(async (resp) => {
        this.lengthForPagination = 10;

        resp.certificados.forEach((certified: any) => {
          this.certificateInfo.push(certified);
        });
      });
  }

  async loadingChangeImg(): Promise<void> {
    await setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  navigateCertificate(recourse: string): void {
    this._router.navigate(['certificates', recourse]);
  }

  ngAfterViewInit() {
    const Boxlayout = (() => {
      const wrapper = document.body,
        sections = this.elementRef.nativeElement.querySelectorAll('section'),
        closeButtons =
          this.elementRef.nativeElement.querySelectorAll('.close-section'),
        expandedClass: string = 'is-expandeed',
        hasExpandedClass: string = 'has-expanded-item';

      const initEvents = () => {
        sections.forEach((element: any) => {
          element.addEventListener('click', () => openSection(element));
        });
        closeButtons.forEach((element: any) => {
          element.addEventListener('click', (event: any) => {
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
    let allFalse: boolean = this.items.every((i) => i.enabledDetail === false);
    if (allFalse) return allFalse;

    // var item = this.items.find(i => i.enabledDetail && i.id == index);
    var item = this.items.find((i) => i.enabledDetail && i === itemSelected);
    return item != null;
  }

  closeDetail(): void {
    this.items.forEach((i) => (i.enabledDetail = false));
  }

  getFilterShadow(choice: string) {
    switch (choice) {
      case 'dotnet':
        return { filter: 'drop-shadow(0 0 0.9rem #732a6f)' };
      case 'angular':
        return { filter: 'drop-shadow(0 0 0.9rem #b70029)' };
      case 'flutter':
        return { filter: 'drop-shadow(0 0 0.9rem #45d1fd)' };
      case 'r3Corda':
        return { filter: 'drop-shadow(0 0 0.9rem #b70029)' };
    }
    return { filter: 'drop-shadow(0 0 0.9rem blue)' };
  }

  getCertificatesByRecourse(recourse: string): CertificateItem[] {
    return this.certificateInfo.filter(
      (certified) => certified.technology === recourse
    );
  }
}
