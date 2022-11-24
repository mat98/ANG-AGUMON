import { LabelModule } from './../../atoms/label/label.module';
import { ImageModule } from './../../atoms/image/image.module';
import { NgModule } from "@angular/core";
import { CoreModule } from "src/app/core/core.module";
import { ImageTitleAndSubscriptionComponent } from "./image-title-and-subscription.component";

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