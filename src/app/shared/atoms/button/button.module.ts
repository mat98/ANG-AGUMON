import { ButtonComponent } from './button.component';
import { CoreModule } from "src/app/core/core.module";
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [ButtonComponent],
    exports: [
        ButtonComponent
    ],
    imports: [
        CoreModule
    ]
})
export class ButtonModule { }