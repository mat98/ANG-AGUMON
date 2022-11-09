import { NgModule } from "@angular/core";
import { CoreModule } from 'src/app/core/core.module';
import { LabelTitleCenterContainerModule } from "src/app/molecules/label_title_center_container/label_title_center_container.module";
import { HeaderItemProjectOrgComponent } from "./header_item_project_org.component";

@NgModule({
    declarations: [HeaderItemProjectOrgComponent],
    exports: [
        HeaderItemProjectOrgComponent
    ],
    imports: [
        LabelTitleCenterContainerModule,
        CoreModule
    ]
})
export class HeaderItemProjectOrgModule { }