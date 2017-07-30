import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationDefaultComponentComponent } from './certification-default-component.component';

describe('CertificationDefaultComponentComponent', () => {
  let component: CertificationDefaultComponentComponent;
  let fixture: ComponentFixture<CertificationDefaultComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificationDefaultComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationDefaultComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
