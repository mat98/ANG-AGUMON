import { NgModule } from "@angular/core";
import { ButtonModule } from "src/app/atoms/button/button.module";
import { CoreModule } from 'src/app/core/core.module';
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