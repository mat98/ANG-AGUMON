import { TextModule } from './../../atoms/text/text.module';
import { NgModule } from '@angular/core';
import { CoreModule } from '../../../core/core.module';
import { CardImageModule } from '../../atoms/card-image/card-image.module';
import { CardWithImageContainerComponent } from './card-with-image-container.component';

@NgModule({
    declarations: [CardWithImageContainerComponent],
    exports: [
        CardWithImageContainerComponent
    ],
    imports: [
        CoreModule,
        TextModule,
        CardImageModule
    ]
})
export class CardWithImageContainerModule { }