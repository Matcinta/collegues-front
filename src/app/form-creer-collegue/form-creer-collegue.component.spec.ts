import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreerCollegueComponent } from './form-creer-collegue.component';

describe('FormCreerCollegueComponent', () => {
  let component: FormCreerCollegueComponent;
  let fixture: ComponentFixture<FormCreerCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCreerCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreerCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
