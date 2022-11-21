import { NgModule } from '@angular/core';
import { CoreModule } from "src/app/core/core.module";
import { CardImageComponent } from './card-image.component';

@NgModule({
    declarations: [CardImageComponent],
    exports: [
        CardImageComponent
    ],
    imports: [
        CoreModule
    ]
})
export class CardImageModule { }