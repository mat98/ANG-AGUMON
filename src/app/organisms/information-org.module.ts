import { NgModule } from "@angular/core";
import { InformationOrgComponent } from "./information-org.component";
import { InformationBlockContainerModule } from '../molecules/information_block_container/information_block_container.module';
import { CoreModule } from "@angular/flex-layout";

@NgModule({
    declarations: [
        InformationOrgComponent
    ],
    exports: [
        InformationOrgComponent
    ],
    imports: [
        InformationBlockContainerModule,
        CoreModule,
    ]
})
export class InformationOrgModule { }