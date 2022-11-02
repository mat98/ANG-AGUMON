
import { NgModule } from "@angular/core";
import { InformationBlockModule } from "src/app/atoms/information-block/information-block.module";
import { InformationBlockContainerComponent } from "./information_block_container.component";

@NgModule({
    declarations: [InformationBlockContainerComponent],
    exports: [
        InformationBlockContainerComponent
    ],
    imports: [
        InformationBlockModule
    ]
})
export class InformationBlockContainerModule { }