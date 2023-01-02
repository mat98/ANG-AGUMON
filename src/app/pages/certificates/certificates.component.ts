import { CertificateItem } from './certificates.model';
import { CertificateService } from './certificates.service';
import { Component, OnInit } from "@angular/core";

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

    ngOnInit(): void {
        this.isLoading = true;
        this.getCertificates();
    }

    constructor(private _certificatesService: CertificateService) {
    }

    private getCertificates(): void {
        this._certificatesService.getCertificates(this.pageNumber, this.pageSize).subscribe(async (resp) => {
            this.lengthForPagination = 10;

            resp.certificados.forEach((certified: any) => {
                this.certificateInfo.push(certified)
            });
        })
    }

    async loadingChangeImg(): Promise<void> {
        await setTimeout(() => {
            this.isLoading = false;
        }, 1000);
    }
}