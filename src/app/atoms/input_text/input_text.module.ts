import { CoreModule } from './../../core/core.module';
import { NgModule } from "@angular/core";
import { InputTextComponent } from './input_text.component';

@NgModule({
    declarations: [InputTextComponent],
    exports: [
        InputTextComponent
    ],
    imports: [
        CoreModule
    ]
})
export class InputTextModule { }