import { CoreModule } from "src/app/core/core.module";
import { NgModule } from "@angular/core";
import { TextComponent } from './text.component';

@NgModule({
    declarations: [TextComponent],
    exports: [
        TextComponent
    ],
    imports: [
        CoreModule
    ]
})

export class TextModule { }