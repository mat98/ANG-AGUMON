import { CoreModule } from './../../core/core.module';
import { InformationBlockComponent } from './information-block.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [InformationBlockComponent],
    exports: [
        InformationBlockComponent
    ],
    imports: [
        CoreModule
    ]
})
export class InformationBlockModule { }