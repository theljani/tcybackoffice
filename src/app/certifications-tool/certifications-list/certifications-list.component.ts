import {Component, ElementRef, ViewChild, OnInit, OnChanges} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {MdPaginator, MdSort, MdCheckbox, MdSidenavContainer, MdSidenav} from '@angular/material';
import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

// Service
import {CertificationsService} from '../services/certifications.service';
// Child Components
import {EditCertificationComponent} from '../edit-certification/edit-certification.component';

// Models
import {Certification} from '../models/certification';
import {CertificationDetails} from '../models/certification-details'

@Component({
  selector: 'app-certifications-list',
  templateUrl: './certifications-list.component.html',
  styleUrls: ['./certifications-list.component.scss']
})
export class CertificationsListComponent implements OnInit, OnChanges {
  searchFilter: string;
  selectedCertification: CertificationDetails;
  action = undefined;

  @ViewChild(MdPaginator) paginator: MdPaginator;
  @ViewChild(MdSort) sort: MdSort;
  @ViewChild(MdSidenav) newCertifSideNav: MdSidenav;
  @ViewChild(EditCertificationComponent) CertificationchildComponent: EditCertificationComponent;

  allCertifications = [];
  certifications = undefined;

  constructor(private _router: Router, 
              private _actiavtedRoute: ActivatedRoute,
              private _certificationsService: CertificationsService) {
  }

  ngOnInit() {
    this.allCertifications = this._certificationsService.getAllCertifications();
    this.certifications = this.allCertifications;
    this.selectedCertification = undefined;
  }

  onCertificationSelected(certification:Certification): void {
    this.action = "edit";
    this.selectedCertification = this._certificationsService.getCertificationDetails(certification.publicId);
    debugger
    this._router.navigate(['/certifications-tool/edit-certification', this.selectedCertification.publicId]);
  }

  onCreateNew() {
    this.searchFilter = '';
    this.selectedCertification = undefined;
    this.action="new";
    this.certifications = this.allCertifications;
    this._router.navigate(['/certifications-tool/new-certification']);
  }

  ngOnChanges(searchInput: any): void {
    this.selectedCertification = undefined;
    if(this.action != "new") {
      this._router.navigate(['/certifications-tool']);
    }

    this.certifications = this.allCertifications.filter(item => {
      return (item.name.indexOf(searchInput) != -1
              || item.publicId.indexOf(searchInput) != -1);
    });
  }

  clearFilter() {
    this.searchFilter = "";
    this.ngOnChanges(null);
  }

  CertificationSideNavClose(event) {
    this.newCertifSideNav.close();
  }
}









