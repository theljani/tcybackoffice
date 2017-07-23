import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, AbstractControl, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Certification} from '../models/certification';
import  {DragDropComponent} from '../draganddrop/drag-drop/drag-drop.component';

@Component({
  selector: 'app-edit-certification',
  templateUrl: './edit-certification.component.html',
  styleUrls: ['./edit-certification.component.scss']
})
export class EditCertificationComponent implements OnInit {
  @Output() closeClicked = new EventEmitter<any>();

  // models
  certification: Certification;
  publicId: string;
  name: string;
  languageEn: string;
  languageFr: string;
  languageEs: string;
  languageZh: string;
  facilityEntityType: boolean;
  productEntityType: boolean;

  certificationFormGroup: FormGroup;
  publicIdFormControl: AbstractControl;
  nameFormControl: AbstractControl;
  languageEnFormControl: AbstractControl;
  languageFrFormControl: AbstractControl;
  languageEsFormControl: AbstractControl;
  languageZhFormControl: AbstractControl;
  facilityEntityTypeFormControl: AbstractControl;
  productEnityTypeFormControl: AbstractControl;

  constructor(private _formBuilder: FormBuilder, private _route: ActivatedRoute) { 
  }

  ngOnInit() {
    debugger
    this.certification = this._route.snapshot.data['CertificationData'];
    this.publicId = this.certification? this.certification.publicId: '';
    this.name = this.certification? this.certification.name: '';
    this.languageEn = this.certification? this.certification.languageEn: '';
    this.languageFr = this.certification? this.certification.languageFr: '';
    this.languageEs = this.certification? this.certification.languageEs: '';
    this.languageZh = this.certification? this.certification.languageZh: '';

    this.certificationFormGroup = this._formBuilder.group({
      publicId: [this.publicId, Validators.required],
      name: [this.name, Validators.required],
      languageEn: [this.languageEn, Validators.required],
      languageFr: [this.languageFr, Validators.required],
      languageEs: [this.languageEs, Validators.required],
      languageZh: [this.languageZh, Validators.required],
      facilityEntityType: [false],
      productEntityType: [false]
    });

    this.publicIdFormControl = this.certificationFormGroup.get('publicId');
    this.nameFormControl = this.certificationFormGroup.get('name');
    this.languageEnFormControl = this.certificationFormGroup.get('languageEn');
    this.languageFrFormControl = this.certificationFormGroup.get('languageFr');
    this.languageEsFormControl = this.certificationFormGroup.get('languageEs');
    this.languageZhFormControl = this.certificationFormGroup.get('languageZh');
    this.facilityEntityTypeFormControl = this.certificationFormGroup.get('facilityEntityType');
    this.productEnityTypeFormControl = this.certificationFormGroup.get('productEntityType');
  }

  closeSideNavigation() {
    this.closeClicked.emit('clicked');
  }
}
