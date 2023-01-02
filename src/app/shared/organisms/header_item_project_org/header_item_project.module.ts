import { ImageLoaderDirective } from './../../directives/image-loader/image-loader.directive';
import { CoreModule } from './../../../core/core.module';
import { LabelTitleCenterContainerModule } from 'src/app/shared/molecules/label_title_center_container/label_title_center_container.module';
import { NgModule } from "@angular/core";
import { HeaderItemProjectOrgComponent } from "./header_item_project_org.component";
import { SharedDirectiveModule } from '../../directives/shared-directive.module';


const COMPONENTS: any = [
    HeaderItemProjectOrgComponent
]

@NgModule({
    declarations: [COMPONENTS],
    exports: [
        COMPONENTS
    ],
    imports: [
        CoreModule,
        LabelTitleCenterContainerModule,
        SharedDirectiveModule
    ]
})
export class HeaderItemProjectOrgModule { }