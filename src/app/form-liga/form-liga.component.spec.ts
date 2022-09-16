import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLigaComponent } from './form-liga.component';

describe('FormLigaComponent', () => {
  let component: FormLigaComponent;
  let fixture: ComponentFixture<FormLigaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLigaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
