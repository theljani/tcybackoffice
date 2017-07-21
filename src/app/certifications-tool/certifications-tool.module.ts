import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificationsToolRoutingModule } from './certifications-tool-routing.module';
import { CertificationsListComponent } from './certifications-list/certifications-list.component';
import { CertificationCategoriesListComponent } from './certification-categories-list/certification-categories-list.component';
import { CertificationActivitiesListComponent } from './certification-activities-list/certification-activities-list.component';
import { CertificationCountriesListComponent } from './certification-countries-list/certification-countries-list.component';

@NgModule({
  imports: [
    CommonModule,
    CertificationsToolRoutingModule
  ],
  declarations: [CertificationsListComponent, CertificationCategoriesListComponent, CertificationCategoriesListComponent, CertificationActivitiesListComponent, CertificationCountriesListComponent]
})
export class CertificationsToolModule { }
