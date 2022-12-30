import { ContactMeService } from './../../pages/contact-me/contact-me.service';

import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';

import { LogoTextModule } from '../atoms/logo-text/logo-text.module';

@NgModule({
  imports: [CoreModule, LogoTextModule],
  providers: [ContactMeService],
})
export class SharedModule { }
