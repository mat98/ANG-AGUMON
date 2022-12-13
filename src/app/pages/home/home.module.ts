import { DividerModule } from './../../shared/atoms/divider/divider.module';
import { LabelModule } from './../../shared/atoms/label/label.module';
import { ImageTitleAndSubscriptionComponentModule } from './../../shared/molecules/image-title-and-subscription/image-title-and-subscription.module';
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
        RouterModule,
        LabelModule,
        DividerModule,
        ImageTitleAndSubscriptionComponentModule
    ],
    declarations: [HomeInitComponent]
})

export class HomeModule { }