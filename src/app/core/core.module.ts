import { DatePipe } from "@angular/common"
import { NgModule } from "@angular/core"
import { MaterialModule } from "./material/material.module"
import { FormsModule } from "@angular/forms"
import { ReactiveFormsModule } from "@angular/forms"
import { FlexLayoutModule } from "@angular/flex-layout"

const MODULES = [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule
]

const PIPES: any = [

]

@NgModule({
    declarations: [

    ],
    imports: [
        MODULES
    ],
    exports: [
        MODULES
    ],
    providers: [
        DatePipe
    ]
})

export class CoreModule {}