import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoVaticiniosComponent } from './listado-vaticinios.component';

describe('ListadoVaticiniosComponent', () => {
  let component: ListadoVaticiniosComponent;
  let fixture: ComponentFixture<ListadoVaticiniosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoVaticiniosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoVaticiniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
