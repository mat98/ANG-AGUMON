import { DividerModule } from './../../shared/atoms/divider/divider.module';
import { LabelModule } from './../../shared/atoms/label/label.module';
import { ImageTitleAndSubscriptionComponentModule } from './../../shared/molecules/image-title-and-subscription/image-title-and-subscription.module';
import { CoreModule } from './../../core/core.module';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeInitComponent } from "./init/home-init.component";
import { ImageLoaderDirective } from '../../core/directives/image-loader/image-loader.directive.ts';

const routes: Routes = [
    {
        path: '',
        component: HomeInitComponent
    }
];

const COMPONENTS: any = [
    HomeInitComponent
]
const DIRECTIVES: any = [
    ImageLoaderDirective
]

@NgModule({
    imports: [
        CoreModule,
        RouterModule.forChild(routes),
        RouterModule,
        LabelModule,
        DividerModule,
        ImageTitleAndSubscriptionComponentModule
    ],
    declarations: [COMPONENTS, DIRECTIVES]
})

export class HomeModule { }