import { CoreModule } from './../../core/core.module';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from 'src/app/shared/components/shared.module';
import { DetailProjectInitComponent } from './init/detail-project-init.component';
import { DetailProjectHeaderComponent } from './components/detail-project-header/detail-project-header.component';
import { DetailProjectBodyComponent } from './components/detail-project-body/detail-project-body.component';
import { InformationOrgModule } from 'src/app/organisms/information-org.module';

const routes: Routes = [
    {
        path: '',
    },
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
        InformationOrgModule
    ],
    declarations: [
        DetailProjectInitComponent,
        DetailProjectHeaderComponent,
        DetailProjectBodyComponent,
    ]
})

export class DetailProjectModule { }