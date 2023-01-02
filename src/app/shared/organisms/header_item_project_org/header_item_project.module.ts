import { ImageLoaderDirective } from './../../../core/directives/image-loader/image-loader.directive.ts';
import { NgModule } from "@angular/core";
import { CoreModule } from 'src/app/core/core.module';
import { LabelTitleCenterContainerModule } from "src/app/shared/molecules/label_title_center_container/label_title_center_container.module";
import { HeaderItemProjectOrgComponent } from "./header_item_project_org.component";


const COMPONENTS: any = [
    HeaderItemProjectOrgComponent
]
const DIRECTIVES: any = [
    ImageLoaderDirective
]

@NgModule({
    declarations: [COMPONENTS, DIRECTIVES],
    exports: [
        COMPONENTS
    ],
    imports: [
        LabelTitleCenterContainerModule,
        CoreModule
    ]
})
export class HeaderItemProjectOrgModule { }