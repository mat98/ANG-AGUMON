import { DatePipe } from "@angular/common"
import { NgModule } from "@angular/core"
import { MaterialModule } from "./material/material.module"
import { FormsModule } from "@angular/forms"
import { ReactiveFormsModule } from "@angular/forms"

const MODULES = [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
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