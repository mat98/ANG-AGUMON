
import { NgModule } from "@angular/core";
import { InformationContactOrgComponent } from './info_contact_org.component';
import { CoreModule } from 'src/app/core/core.module';
import { InputContactContainerModule } from "../../molecules/input_contact_container/input_contact_container.module";
import { SendMessageContactContainerModule } from "../../molecules/send_message_contact_container/send_message_contact_container.module";

@NgModule({
    declarations: [
        InformationContactOrgComponent
    ],
    exports: [
        InformationContactOrgComponent
    ],
    imports: [
        InputContactContainerModule,
        SendMessageContactContainerModule,
        CoreModule,
    ]
})
export class InformationContactOrgModule { }