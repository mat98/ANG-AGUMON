import { LabelModule } from './../../shared/atoms/label/label.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { DividerModule } from 'src/app/shared/atoms/divider/divider.module';
import { LabelSubtitleModule } from 'src/app/shared/atoms/label-subtitle/label-subtitle.module';
import { SkillsBodyComponent } from './components/skills-body.component';
import { SkillsComponent } from './skills.component';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

const routes: Routes = [
    {
        path: '',
        component: SkillsComponent,
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
        LabelModule,
        RoundProgressModule
    ],
    declarations: [SkillsComponent, SkillsBodyComponent],
})

export class SkillsModule { }
