import { CoreModule } from './../../core/core.module';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from 'src/app/shared/components/shared.module';
import { DetailProjectInitComponent } from './init/detail-project-init.component';
import { DetailProjectHeaderComponent } from './components/detail-project-header/detail-project-header.component';
import { DetailProjectBodyComponent } from './components/detail-project-body/detail-project-body.component';
import { InformationOrgModule } from 'src/app/shared/organisms/information-org/information-org.module';
import { HeaderItemProjectOrgModule } from 'src/app/shared/organisms/header_item_project_org/header_item_project.module';
import { DetailAboutProjectOrgModule } from 'src/app/shared/organisms/detail-about-project-org/detail-about-project.module';

const routes: Routes = [
    {
        path: ':linkProject',
        component: DetailProjectInitComponent,
    },
];

@NgModule({
    imports: [
        CoreModule,
        RouterModule.forChild(routes),
        RouterModule,
        SharedModule,
        InformationOrgModule,
        HeaderItemProjectOrgModule,
        DetailAboutProjectOrgModule
    ],
    declarations: [
        DetailProjectInitComponent,
        DetailProjectHeaderComponent,
        DetailProjectBodyComponent,
    ]
})

export class DetailProjectModule { }