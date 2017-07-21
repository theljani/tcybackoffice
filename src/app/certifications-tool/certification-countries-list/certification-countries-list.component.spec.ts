import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationCountriesListComponent } from './certification-countries-list.component';

describe('CertificationCountriesListComponent', () => {
  let component: CertificationCountriesListComponent;
  let fixture: ComponentFixture<CertificationCountriesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificationCountriesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationCountriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
