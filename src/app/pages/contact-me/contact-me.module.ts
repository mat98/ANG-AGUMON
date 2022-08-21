import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactMeInitComponent } from './init/contact-me-init.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/components/shared.module';

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
  ],
  declarations: [ContactMeInitComponent],
})
export class ContactMeModule {}
