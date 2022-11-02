import { DatePipe, CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { MaterialModule } from "../shared/components/material/material.module"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { FlexLayoutModule } from "@angular/flex-layout"

const MODULES = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
]

const PIPES: any = [

]

@NgModule({
    declarations: [
        PIPES
    ],
    imports: [
        MODULES
    ],
    exports: [
        MODULES, PIPES
    ],
    providers: [
        DatePipe
    ]
})

export class CoreModule { }