import {Component, ElementRef, ViewChild, OnInit, OnChanges, Input, Output, EventEmitter} from '@angular/core';
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
import {CertificationsService} from './services/certifications.service';
// Child Components
import {EditCertificationComponent} from '../edit-certification/edit-certification.component';

// Models
import {Certification, CertificationItem} from '../models/certification';
import {CertificationDetails} from '../models/certification-details'


@Component({
  selector: 'app-certifications-list',
  templateUrl: './certifications-list.component.html',
  styleUrls: ['./certifications-list.component.scss']
})
export class CertificationsListComponent implements OnInit, OnChanges {
  searchFilter: string;
  selectedCertification: CertificationItem;
  action = undefined;

  @Input() mode: string;
  @Input() certificationsList : CertificationItem[];
  @Output() certificationSelectedEvent = new EventEmitter<CertificationItem>();

  certifications = undefined;

  constructor(private _router: Router, 
              private _actiavtedRoute: ActivatedRoute,
              private _certificationsService: CertificationsService) {
  }

  ngOnInit() {
    // this.certifications = this.certificationsList;

    // this._certificationsService.getAllCertifications().subscribe(data => {
    //   this.certifications = data.json();
    // });
   // this.selectedCertification = this._certificationsService.getCertificationDetails(this.certifications[0].publicId);
  }

  ngOnChanges(data) {
    this.certifications = this.certificationsList;
  }

  onCertificationSelected(certification:CertificationItem): void {
    this.selectedCertification = certification;
    this.certificationSelectedEvent.emit(certification);
  }
}









