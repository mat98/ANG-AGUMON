import { NgModule } from "@angular/core";
import { CoreModule } from 'src/app/core/core.module';
import { ButtonModule } from "../../atoms/button/button.module";
import { SendMessageContactContainerComponent } from './send_message_contact_container.component';

@NgModule({
    declarations: [SendMessageContactContainerComponent],
    exports: [
        SendMessageContactContainerComponent
    ],
    imports: [
        ButtonModule,
        CoreModule
    ]
})
export class SendMessageContactContainerModule { }