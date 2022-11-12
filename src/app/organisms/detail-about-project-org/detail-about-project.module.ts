import { NgModule } from '@angular/core';
import { CardWithImageContainerModule } from 'src/app/molecules/card-with-image-container/card-with-image-container.module';
import { InfoProjectContainerModule } from 'src/app/molecules/info-project-container/info-project-container.module';
import { CoreModule } from './../../core/core.module';
import { DetailAboutProjectOrgComponent } from './detail-about-project-org.component';

@NgModule({
    declarations: [DetailAboutProjectOrgComponent],
    exports: [
        DetailAboutProjectOrgComponent
    ],
    imports: [
        CoreModule,
        CardWithImageContainerModule,
        InfoProjectContainerModule
    ]
})
export class DetailAboutProjectOrgModule { }