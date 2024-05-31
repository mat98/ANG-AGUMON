import { CertificateService } from './certificates.service';
import { LabelModule } from '../shared/atoms/label/label.module';
import { CertificatesComponent } from './certificates.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { DividerModule } from 'src/app/shared/atoms/divider/divider.module';
import { LabelSubtitleModule } from 'src/app/shared/atoms/label-subtitle/label-subtitle.module';
import { DetailCertificateComponent } from './detail-certificate/detail-certificate.component';
import { SharedDirectiveModule } from '../shared/directives/shared-directive.module';

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

const COMPONENTS = [CertificatesComponent, DetailCertificateComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CoreModule,
    RouterModule.forChild(routes),
    RouterModule,
    CommonModule,
    LabelModule,
    LabelSubtitleModule,
    DividerModule,
    SharedDirectiveModule,
  ],
  providers: [CertificateService],
})
export class CertificatesModule {}
