import { AuthenticatedLayoutComponent } from './core/components/authenticated-layout/authenticated-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AuthenticatedLayoutComponent,
    children: [
      {
        path: '',
        canActivate: [],
        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'teste',
        canActivate: [],
        loadChildren: () =>
          import('./pages/contact-me/contact-me.module').then(
            (m) => m.ContactMeModule
          ),
      },
      {
        path: 'detail-project',
        canActivate: [],
        loadChildren: () => 
          import("./pages/detail-project/detail-project.module").then(
            (m) => m.DetailProjectModule
          )
      },
      {
        path: 'working-exp',
        canActivate: [],
        loadChildren: () =>
          import('./pages/professional-exp/working-exp.module').then(
            (m) => m.WorkingExpModule
          ),
      },
      {
        path: 'certificates',
        canActivate: [],
        loadChildren: () =>
          import('./pages/certificates/certificates.module').then(
            (m) => m.CertificatesModule
          ),
      },
      {
        path: 'skills',
        canActivate: [],
        loadChildren: () =>
          import('./pages/skills/skills.module').then(
            (m) => m.SkillsModule
          ),
      },
      {
        path: '',
        canActivate: [],
        loadChildren: () =>
          import('./pages/professional-exp/working-exp.module').then(
            (m) => m.WorkingExpModule
          ),
      },
    ],
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
