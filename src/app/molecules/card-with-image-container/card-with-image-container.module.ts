import { NgModule } from '@angular/core';
import { CardImageModule } from 'src/app/atoms/card-image/card-image.module';
import { CoreModule } from '../../core/core.module';
import { CardWithImageContainerComponent } from './card-with-image-container.component';

@NgModule({
    declarations: [CardWithImageContainerComponent],
    exports: [
        CardWithImageContainerComponent
    ],
    imports: [
        CoreModule,
        CardImageModule
    ]
})
export class CardWithImageContainerModule { }