import { CoreModule } from "src/app/core/core.module";
import { Input, NgModule } from "@angular/core";
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
export class InputTextModule {}