
import { NgModule } from "@angular/core";
import { CoreModule } from "src/app/core/core.module";
import { LabelTitleComponent } from '../label-title/label-title.component';
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