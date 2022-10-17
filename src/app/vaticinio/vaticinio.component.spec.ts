import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaticinioComponent } from './vaticinio.component';

describe('VaticinioComponent', () => {
  let component: VaticinioComponent;
  let fixture: ComponentFixture<VaticinioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaticinioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaticinioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
