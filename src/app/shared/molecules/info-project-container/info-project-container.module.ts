import { TextModule } from './../../atoms/text/text.module';
import { NgModule } from '@angular/core';
import { CoreModule } from '../../../core/core.module';
import { LabelSubtitleModule } from '../../atoms/label-subtitle/label-subtitle.module';
import { LabelTitleModule } from '../../atoms/label-title/label-title.module';
import { InfoProjectContainerComponent } from './info-project-container.component';
import { DividerModule } from '../../atoms/divider/divider.module';

@NgModule({
    declarations: [InfoProjectContainerComponent],
    exports: [
        InfoProjectContainerComponent
    ],
    imports: [
        CoreModule,
        LabelTitleModule,
        LabelSubtitleModule,
        TextModule,
        DividerModule
    ]
})
export class InfoProjectContainerModule { }