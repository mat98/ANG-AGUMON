import { NgModule } from "@angular/core";
import { InformationBlockContainerComponent } from "./information_block_container.component";
import { CoreModule } from 'src/app/core/core.module';
import { InformationBlockModule } from "../../atoms/information-block/information-block.module";

@NgModule({
    declarations: [InformationBlockContainerComponent],
    exports: [
        InformationBlockContainerComponent
    ],
    imports: [
        CoreModule,
        InformationBlockModule
    ]
})
export class InformationBlockContainerModule { }