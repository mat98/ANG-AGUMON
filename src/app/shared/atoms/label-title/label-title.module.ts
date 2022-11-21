import { CoreModule } from "src/app/core/core.module";
import { NgModule } from "@angular/core";
import { LabelTitleComponent } from './label-title.component';

@NgModule({
    declarations: [LabelTitleComponent],
    exports: [
        LabelTitleComponent
    ],
    imports: [
        CoreModule
    ]
})
export class LabelTitleModule { }