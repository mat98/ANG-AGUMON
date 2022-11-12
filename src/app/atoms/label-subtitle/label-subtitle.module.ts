import { CoreModule } from './../../core/core.module';
import { NgModule } from "@angular/core";
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