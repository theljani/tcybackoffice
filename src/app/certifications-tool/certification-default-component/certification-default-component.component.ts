import { Component, OnInit } from '@angular/core';

// Models
import {Certification, CertificationItem}  from '../models/certification';
import {CertificationDetails} from '../models/certification-details';

// Components
import {CertificationsListComponent} from '../certifications-list/certifications-list.component';
import {EditCertificationComponent} from '../edit-certification/edit-certification.component';

// Services
import {CertificationsService} from '../certifications-list/services/certifications.service';


@Component({
  selector: 'app-certification-default-component',
  templateUrl: './certification-default-component.component.html',
  styleUrls: ['./certification-default-component.component.scss']
})
export class CertificationDefaultComponent implements OnInit {
  mode: string;
  searchFilter: string = '';
  certificationsList: CertificationItem[] = [];
  selectedCertification: CertificationDetails = null;

  constructor(private _certificationsService: CertificationsService) { }

  ngOnInit() {
    this._certificationsService.getAllCertifications().subscribe(data => {
      this.certificationsList = data.json();
    });
    //this.selectedCertification = this._certificationsService.getCertificationDetails(this.certificationsList[0].publicId);
    this.mode = 'EDIT';
  }

  onCertificationSelected(selectedCertification: CertificationItem) {
    debugger
    this._certificationsService.getCertificationDetails(selectedCertification.publicId)
    .subscribe(data => {
      this.selectedCertification = data.json();
    });

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
