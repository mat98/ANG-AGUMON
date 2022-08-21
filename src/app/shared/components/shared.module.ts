import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { MapComponent } from './map/map.component';

const COMPONENTS = [MapComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CoreModule],
  exports: [COMPONENTS],
  providers: [],
})
export class SharedModule {}
