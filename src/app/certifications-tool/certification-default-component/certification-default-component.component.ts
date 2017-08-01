import { Component, OnInit } from '@angular/core';

// Models
import {Certification} from '../models/certification';
import {CertificationDetails} from '../models/certification-details';

// Components
import {CertificationsListComponent} from '../certifications-list/certifications-list.component';
import {EditCertificationComponent} from '../edit-certification/edit-certification.component';

// Services
import {CertificationsService} from '../services/certifications.service';


@Component({
  selector: 'app-certification-default-component',
  templateUrl: './certification-default-component.component.html',
  styleUrls: ['./certification-default-component.component.scss']
})
export class CertificationDefaultComponent implements OnInit {
  mode: string;
  searchFilter: string = '';
  certificationsList: Certification[] = [];
  selectedCertification: CertificationDetails = null;

  constructor(private _certificationsService: CertificationsService) { }

  ngOnInit() {
    this.certificationsList = this._certificationsService.getAllCertifications();
    this.selectedCertification = this._certificationsService.getCertificationDetails(this.certificationsList[0].publicId);
    this.mode = 'EDIT';
  }

  onCertificationSelected(selectedCertification: Certification) {
    this.selectedCertification = this._certificationsService.getCertificationDetails(selectedCertification.publicId);
    this.mode = 'EDIT';
  }

  onFilterChangedEvent(filter) {
    alert(JSON.stringify(filter));
  }
  onCreateNewEvent() {
    this.selectedCertification = this.initCertificationDetailsModel();
    this.mode = 'CREATE';
  }

  initCertificationDetailsModel(): CertificationDetails {
    return {
      publicId: '',
      name: '',
      languageEn: '',
      languageFr: '',
      languageEs: '',
      languageZh: '',
      activities: [],
      categories: [],
      entityTypes: [],
      countries: []
    };
  }
}
