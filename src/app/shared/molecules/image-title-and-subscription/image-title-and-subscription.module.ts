import { LabelModule } from './../../atoms/label/label.module';
import { ImageModule } from './../../atoms/image/image.module';
import { NgModule } from "@angular/core";
import { ImageTitleAndSubscriptionComponent } from "./image-title-and-subscription.component";
import { CoreModule } from '../../../core/core.module';

@NgModule({
    declarations: [ImageTitleAndSubscriptionComponent],
    exports: [
        ImageTitleAndSubscriptionComponent
    ],
    imports: [
        ImageModule,
        LabelModule,
        CoreModule,
    ]
})
export class ImageTitleAndSubscriptionComponentModule { }