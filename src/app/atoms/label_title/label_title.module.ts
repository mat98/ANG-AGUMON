import { CoreModule } from './../../core/core.module';
import { NgModule } from "@angular/core";
import { LabelTitleComponent } from './label_title.component';

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