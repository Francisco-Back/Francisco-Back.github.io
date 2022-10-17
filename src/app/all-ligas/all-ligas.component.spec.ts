import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLigasComponent } from './all-ligas.component';

describe('AllLigasComponent', () => {
  let component: AllLigasComponent;
  let fixture: ComponentFixture<AllLigasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLigasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllLigasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
