
import { DatePipe, CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { MaterialModule } from "../shared/components/material/material.module"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { FlexLayoutModule } from "@angular/flex-layout"
import { MatCarouselModule } from 'ng-mat-carousel'
import { LogoTextModule } from "../shared/atoms/logo-text/logo-text.module"
import { MapComponent } from "./components/map/map.component"
import { FooterComponent } from "./components/footer/footer.component"

const MODULES = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    MatCarouselModule,
    LogoTextModule
]

const COMPONENTS = [
    MapComponent,
    FooterComponent
]

const PIPES: any = [

]

@NgModule({
    declarations: [
        PIPES,
        COMPONENTS
    ],
    imports: [
        MODULES
    ],
    exports: [
        MODULES, PIPES, COMPONENTS
    ],
    providers: [
        DatePipe
    ]
})

export class CoreModule { }