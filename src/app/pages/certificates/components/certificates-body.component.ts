import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-certificates-body',
    templateUrl: './certificates-body.component.html',
    styleUrls: ['./certificates-body.component.scss'],
})

export class CertificatesBodyComponent implements OnInit {
    isLoading: boolean = false;

    ngOnInit(): void {
      
    }
}