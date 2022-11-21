import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactMeInitComponent } from './init/contact-me-init.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { InformationContactOrgModule } from 'src/app/shared/organisms/info_contact_org/info_contact_org.module';

const routes: Routes = [
  {
    path: '',
    component: ContactMeInitComponent,
  },
];

@NgModule({
  imports: [
    CoreModule,
    RouterModule.forChild(routes),
    RouterModule,
    SharedModule,
    InformationContactOrgModule
  ],
  declarations: [ContactMeInitComponent],
})
export class ContactMeModule {}
