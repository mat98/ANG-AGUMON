
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { CardWithImageContainerModule } from 'src/app/shared/molecules/card-with-image-container/card-with-image-container.module';
import { InfoProjectContainerModule } from 'src/app/shared/molecules/info-project-container/info-project-container.module';
import { DividerModule } from '../../atoms/divider/divider.module';
import { LabelSubtitleModule } from '../../atoms/label-subtitle/label-subtitle.module';
import { LabelTitleModule } from '../../atoms/label-title/label-title.module';
import { LabelModule } from '../../atoms/label/label.module';
import { DetailAboutProjectOrgComponent } from './detail-about-project-org.component';

@NgModule({
    declarations: [DetailAboutProjectOrgComponent],
    exports: [
        DetailAboutProjectOrgComponent
    ],
    imports: [
        CoreModule,
        CardWithImageContainerModule,
        InfoProjectContainerModule,
        LabelModule,
        LabelSubtitleModule,
        LabelTitleModule,
        DividerModule
    ]
})
export class DetailAboutProjectOrgModule { }