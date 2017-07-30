import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModuleModule} from '../common/material-module/material-module.module';
import { CertificationsToolRoutingModule } from './certifications-tool-routing.module';
import { CertificationsListComponent } from './certifications-list/certifications-list.component';
import { CertificationCategoriesListComponent } from './certification-categories-list/certification-categories-list.component';
import { CertificationActivitiesListComponent } from './certification-activities-list/certification-activities-list.component';
import { CertificationCountriesListComponent } from './certification-countries-list/certification-countries-list.component';
import { EditCertificationComponent } from './edit-certification/edit-certification.component';
import {DragulaModule} from "ng2-dragula";
import { DragDropComponent } from './draganddrop/drag-drop/drag-drop.component';

import {ResolveGuard} from '../certifications-tool/edit-certification/guards/resolve.guard';
import {CertificationsService} from '../certifications-tool/services/certifications.service';
import { CertificationDefaultComponent } from './certification-default-component/certification-default-component.component';
import { CertificationLinksPanelComponent } from './certification-links-panel/certification-links-panel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModuleModule,
    CertificationsToolRoutingModule,
    DragulaModule
  ],
  declarations: [CertificationsListComponent, CertificationCategoriesListComponent, CertificationCategoriesListComponent, CertificationActivitiesListComponent, CertificationCountriesListComponent, EditCertificationComponent, DragDropComponent, CertificationDefaultComponent, CertificationLinksPanelComponent],
  providers: [ResolveGuard, CertificationsService]
})
export class CertificationsToolModule { }
