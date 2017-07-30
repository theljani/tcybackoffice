import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationLinksPanelComponent } from './certification-links-panel.component';

describe('CertificationLinksPanelComponent', () => {
  let component: CertificationLinksPanelComponent;
  let fixture: ComponentFixture<CertificationLinksPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificationLinksPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationLinksPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
