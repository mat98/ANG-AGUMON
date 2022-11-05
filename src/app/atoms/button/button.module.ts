import { ButtonComponent } from './button.component';
import { CoreModule } from './../../core/core.module';
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