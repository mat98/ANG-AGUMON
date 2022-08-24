import { CoreModule } from './../../core/core.module';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeInitComponent } from "./init/home-init.component";

const routes: Routes = [
    {
        path: '',
        component: HomeInitComponent
    }
];

@NgModule({
    imports: [
        CoreModule,
        RouterModule.forChild(routes),
        RouterModule
    ],
    declarations: [HomeInitComponent]
})

export class HomeModule { }