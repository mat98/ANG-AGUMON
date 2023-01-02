import { ImageLoaderDirective } from './image-loader/image-loader.directive';
import { NgModule } from '@angular/core';

const DIRECTIVES: any = [
    ImageLoaderDirective
]

@NgModule({
  declarations: [
    DIRECTIVES
  ],
  exports: [
    DIRECTIVES
  ],

})
export class SharedDirectiveModule { }
