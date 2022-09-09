import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormligaComponent } from './formliga.component';

describe('FormligaComponent', () => {
  let component: FormligaComponent;
  let fixture: ComponentFixture<FormligaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormligaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormligaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
