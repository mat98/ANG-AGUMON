import { InputTextModule } from './../../atoms/input_text/input_text.module';
import { InputContactContainer } from './input_contact_container.component';

import { NgModule } from "@angular/core";
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
    declarations: [InputContactContainer],
    exports: [
        InputContactContainer
    ],
    imports: [
        InputTextModule,
        CoreModule
    ]
})
export class InputContactContainerModule { }