import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CertificationsListComponent} from './certifications-list/certifications-list.component';
import {CertificationCategoriesListComponent} from './certification-categories-list/certification-categories-list.component';
import {CertificationActivitiesListComponent} from './certification-activities-list/certification-activities-list.component';
import {CertificationCountriesListComponent} from './certification-countries-list/certification-countries-list.component';
import {EditCertificationComponent} from './edit-certification/edit-certification.component';
import {CertificationDefaultComponent} from './certification-default-component/certification-default-component.component';

import {ResolveGuard} from '../certifications-tool/edit-certification/guards/resolve.guard';

const routes: Routes = [
  {
    path:'certifications-tool', component: CertificationDefaultComponent, 
    // children:[
    //     {
    //       path: '', component: CertificationDefaultComponent
    //     },
    //     {
    //       path: 'edit-certification/:publicId', component: EditCertificationComponent,
    //       resolve: {CertificationData: ResolveGuard ? ResolveGuard : null}
    //     },
    //     {
    //       path: 'new-certification', component: EditCertificationComponent
    //     }
    // ]
  },
  {
    path:'certifications-tool/certifications', component: CertificationDefaultComponent, 
  },
  {
    path: 'certifications-tool/categories', component: CertificationCategoriesListComponent
  },
  {
    path: 'certifications-tool/activities', component: CertificationActivitiesListComponent
  },
  {
    path: 'certifications-tool/countries', component: CertificationCountriesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificationsToolRoutingModule { }
