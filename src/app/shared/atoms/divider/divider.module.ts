import { DividerComponent } from './divider.component';
import { CoreModule } from "src/app/core/core.module";
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [DividerComponent],
    exports: [
        DividerComponent
    ],
    imports: [
        CoreModule
    ]
})
export class DividerModule { }