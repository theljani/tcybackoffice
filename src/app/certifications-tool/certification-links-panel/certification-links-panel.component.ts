import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-certification-links-panel',
  templateUrl: './certification-links-panel.component.html',
  styleUrls: ['./certification-links-panel.component.scss']
})
export class CertificationLinksPanelComponent implements OnInit {

  @Input() panelDetails: any;
  constructor() {}

  ngOnInit() {
  }

}
