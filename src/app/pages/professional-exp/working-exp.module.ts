import { DividerModule } from './../../shared/atoms/divider/divider.module';
import { LabelSubtitleModule } from './../../shared/atoms/label-subtitle/label-subtitle.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HorizontalTimelineComponent } from "src/app/core/components/horizontal-timeline/horizontal-timeline.component";
import { CoreModule } from 'src/app/core/core.module';
import { ProfessionalExpBodyComponent } from "./components/professional-exp-body/professional-exp-body.component";
import { ProfessionalExpComponent } from './professional-exp.component';
import { ScrollingModule } from '@angular/cdk/scrolling';


const routes: Routes = [
    {
        path: '',
        component: ProfessionalExpComponent,
    },
];

@NgModule({
    imports: [
        CoreModule,
        RouterModule.forChild(routes),
        RouterModule,
        CommonModule,
        LabelSubtitleModule,
        DividerModule,
    ],
    declarations: [ProfessionalExpComponent, ProfessionalExpBodyComponent, HorizontalTimelineComponent],
})

export class WorkingExpModule { }
