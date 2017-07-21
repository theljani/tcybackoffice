import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationCategoriesListComponent } from './certification-categories-list.component';

describe('CertificationCategoriesListComponent', () => {
  let component: CertificationCategoriesListComponent;
  let fixture: ComponentFixture<CertificationCategoriesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificationCategoriesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationCategoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
