import { TextModule } from './../../atoms/text/text.module';
import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { InfoProjectContainerComponent } from './info-project-container.component';
import { LabelTitleModule } from 'src/app/atoms/label_title/label_title.module';
import { LabelSubtitleModule } from 'src/app/atoms/label-subtitle/label-subtitle.module';
import { DividerModule } from 'src/app/atoms/divider/divider.module';

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