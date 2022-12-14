import { CertificatesComponent } from './certificates.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { DividerModule } from 'src/app/shared/atoms/divider/divider.module';
import { LabelSubtitleModule } from 'src/app/shared/atoms/label-subtitle/label-subtitle.module';
import { CertificatesBodyComponent } from './components/certificates-body.component';
import { DetailCertificateComponent } from './detail-certificate/detail-certificate.component';

const routes: Routes = [
    {
        path: '',
        component: CertificatesComponent,
    },
    {
        path: ':idCertificate',
        component: DetailCertificateComponent,
    },
];

@NgModule({
    imports: [
        CoreModule,
        RouterModule.forChild(routes),
        RouterModule,
        CommonModule,
        LabelSubtitleModule,
        DividerModule
    ],
    declarations: [CertificatesComponent, DetailCertificateComponent, CertificatesBodyComponent],
})

export class CertificatesModule { }
