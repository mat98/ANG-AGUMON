import { NgModule } from "@angular/core";
import { InformationBlockModule } from "src/app/atoms/information-block/information-block.module";
import { InformationBlockContainerComponent } from "./information_block_container.component";
import { CoreModule } from 'src/app/core/core.module';

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