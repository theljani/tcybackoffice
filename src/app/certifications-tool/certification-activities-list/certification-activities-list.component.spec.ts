import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationActivitiesListComponent } from './certification-activities-list.component';

describe('CertificationActivitiesListComponent', () => {
  let component: CertificationActivitiesListComponent;
  let fixture: ComponentFixture<CertificationActivitiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificationActivitiesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationActivitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
