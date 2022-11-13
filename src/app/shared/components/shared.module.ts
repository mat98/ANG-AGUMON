import { LogoTextModule } from './../../atoms/logo-text/logo-text.module';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';

const COMPONENTS = [MapComponent, FooterComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CoreModule, LogoTextModule],
  exports: [COMPONENTS],
  providers: [],
})
export class SharedModule { }
