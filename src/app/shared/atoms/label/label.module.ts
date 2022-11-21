import { LabelComponent } from './label.component';
import { CoreModule } from "src/app/core/core.module";
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [LabelComponent],
    exports: [
        LabelComponent
    ],
    imports: [
        CoreModule
    ]
})
export class LabelModule { }