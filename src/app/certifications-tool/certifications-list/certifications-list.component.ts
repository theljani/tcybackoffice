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
export class CertificationsListComponent implements OnInit {
  searchFilter: string;
  selectedCertification: Certification;
  action = undefined;

  @Input() mode: string;
  @Input() certificationsList : Certification[];
  @Output() certificationSelectedEvent = new EventEmitter<Certification>();

  certifications = undefined;

  constructor(private _router: Router, 
              private _actiavtedRoute: ActivatedRoute,
              private _certificationsService: CertificationsService) {
  }

  ngOnInit() {
    this.certifications = this.certificationsList;
    this.selectedCertification = this.certifications[0];
  }

  onCertificationSelected(certification:Certification): void {
    this.selectedCertification = certification;
    this.certificationSelectedEvent.emit(certification);
  }
}









