import { NgModule } from "@angular/core";
import { LabelTitleModule } from "src/app/atoms/label_title/label_title.module";
import { CoreModule } from 'src/app/core/core.module';
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