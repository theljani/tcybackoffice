import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CertificationsListComponent} from './certifications-list/certifications-list.component';
import {CertificationCategoriesListComponent} from './certification-categories-list/certification-categories-list.component';
import {CertificationActivitiesListComponent} from './certification-activities-list/certification-activities-list.component';
import {CertificationCountriesListComponent} from './certification-countries-list/certification-countries-list.component';
import {EditCertificationComponent} from './edit-certification/edit-certification.component';
import {ResolveGuard} from '../certifications-tool/edit-certification/guards/resolve.guard';

const routes: Routes = [
  {
    path:'certifications-tool', component: CertificationsListComponent
  },
  {
    path: 'certifications-tool/categories', component: CertificationCategoriesListComponent
  },
  {
    path: 'certifications-tool/activities', component: CertificationActivitiesListComponent
  },
  {
    path: 'certifications-tool/countries', component: CertificationCountriesListComponent
  }, 
  {
    path: 'certifications-tool/edit-certification/:publicId', component: EditCertificationComponent,
    resolve: {CertificationData: ResolveGuard ? ResolveGuard : null}
  },
  {
    path: 'certifications-tool/new-certification', component: EditCertificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificationsToolRoutingModule { }
