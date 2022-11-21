import { NgModule } from "@angular/core";
import { CoreModule } from 'src/app/core/core.module';
import { LabelTitleModule } from "../../atoms/label-title/label-title.module";
import { LabelTitleCenterContainer } from "./label_title_center_container.component.spec";

@NgModule({
    declarations: [LabelTitleCenterContainer],
    exports: [
        LabelTitleCenterContainer
    ],
    imports: [
        LabelTitleModule,
        CoreModule
    ]
})
export class LabelTitleCenterContainerModule { }