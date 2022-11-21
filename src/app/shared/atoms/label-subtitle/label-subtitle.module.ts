
import { NgModule } from "@angular/core";
import { CoreModule } from "src/app/core/core.module";
import { LabelSubtitleComponent } from './label-subtitle.component';

@NgModule({
    declarations: [LabelSubtitleComponent],
    exports: [
        LabelSubtitleComponent
    ],
    imports: [
        CoreModule
    ]
})
export class LabelSubtitleModule { }