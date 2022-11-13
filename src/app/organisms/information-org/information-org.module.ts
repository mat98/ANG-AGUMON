import { NgModule } from "@angular/core";
import { InformationOrgComponent } from "./information-org.component";
import { CoreModule } from "@angular/flex-layout";
import { InformationBlockContainerModule } from "src/app/molecules/information_block_container/information_block_container.module";

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