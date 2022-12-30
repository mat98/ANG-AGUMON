import { LabelModule } from './../../shared/atoms/label/label.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactMeInitComponent } from './init/contact-me-init.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { SendMessageContactContainerModule } from 'src/app/shared/molecules/send_message_contact_container/send_message_contact_container.module';

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
    LabelModule,
    SendMessageContactContainerModule
  ],
  declarations: [ContactMeInitComponent],
})
export class ContactMeModule {}
