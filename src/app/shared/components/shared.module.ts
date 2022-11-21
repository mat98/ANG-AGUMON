
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';

import { LogoTextModule } from '../atoms/logo-text/logo-text.module';

@NgModule({
  // declarations: [COMPONENTS],
  imports: [CoreModule, LogoTextModule],
  // exports: [COMPONENTS],
  providers: [],
})
export class SharedModule { }
