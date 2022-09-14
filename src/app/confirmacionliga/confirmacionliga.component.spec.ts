import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionligaComponent } from './confirmacionliga.component';

describe('ConfirmacionligaComponent', () => {
  let component: ConfirmacionligaComponent;
  let fixture: ComponentFixture<ConfirmacionligaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmacionligaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmacionligaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
