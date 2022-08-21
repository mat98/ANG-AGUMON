import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactMeInitComponent } from './init/contact-me-init.component';

const routes: Routes = [
  {
    path: 'list',
    component: ContactMeInitComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [ContactMeInitComponent],
})
export class ContactMeModule {}
