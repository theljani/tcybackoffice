import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges } from '@angular/core';
import {FormBuilder, FormGroup, AbstractControl, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {CertificationDetails} from '../models/certification-details';
import  {DragDropComponent} from '../draganddrop/drag-drop/drag-drop.component';

import {ItemModel} from '../models/item-model';
import {CertificationLinksPanelComponent} from '../certification-links-panel/certification-links-panel.component';


@Component({
  selector: 'app-edit-certification',
  templateUrl: './edit-certification.component.html',
  styleUrls: ['./edit-certification.component.scss']
})
export class EditCertificationComponent implements OnInit, OnChanges {
  @Input() mode: string;
  @Input() certification: CertificationDetails;
  @Output() closeClicked = new EventEmitter<any>();
  
  @ViewChild(CertificationLinksPanelComponent) categoriesPanel: CertificationLinksPanelComponent;
  @ViewChild(CertificationLinksPanelComponent) activitiesPanel: CertificationLinksPanelComponent;
  @ViewChild(CertificationLinksPanelComponent) countriesPanel: CertificationLinksPanelComponent;

  categoriesPanelDetails = {
    title: 'Categories Panel',
    items: []
  };

  activitiesPanelDetails = {
    title: 'Activities Panel',
    items: []
  };

  countriesPanelDetails = {
    title: 'Countries Panel',
    items: []
  };

  categoriesPanelTitle: string = "Categories Panel";
  activitiesPanelTitle: string = "Activities Panel";
  countriesPanelTitle: string = "Countries Panel";
  facilityEntityType: boolean;
  productEntityType: boolean;
  editModeEnabled = false;


  constructor(private _formBuilder: FormBuilder, private _route: ActivatedRoute) {}

  ngOnInit() {
    this.categoriesPanelDetails.items = this.certification ? this.certification.categories : [];
    this.activitiesPanelDetails.items = this.certification ? this.certification.activities : [];
    this.countriesPanelDetails.items = this.certification ? this.certification.countries : [];
  }

  ngOnChanges(changes: any): void {
    this.certification = changes.certification.currentValue;
    this.categoriesPanelDetails.items = this.certification ? this.certification.categories : [];
    this.activitiesPanelDetails.items = this.certification ? this.certification.activities : [];
    this.countriesPanelDetails.items = this.certification ? this.certification.countries : [];
    this.facilityEntityType =this.certification && this.certification.entityTypes.indexOf('Facility') != -1 ? true : false;
    this.productEntityType =this.certification && this.certification.entityTypes.indexOf('ProductRef') != -1 ? true : false;
  }

  onEnableEditEvent() {
    this.editModeEnabled = true;
  }

  onDisableEditEvent() {
    this.editModeEnabled = false;
  }
}
