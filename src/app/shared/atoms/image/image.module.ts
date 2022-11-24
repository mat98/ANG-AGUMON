import { CoreModule } from "src/app/core/core.module";
import { NgModule } from "@angular/core";
import { ImageComponent } from './image.component';

@NgModule({
    declarations: [ImageComponent],
    exports: [
        ImageComponent
    ],
    imports: [
        CoreModule
    ]
})
export class ImageModule { }