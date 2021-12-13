import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentsDetailComponent } from './equipments-detail.component';

describe('EquipmentsDetailComponent', () => {
  let component: EquipmentsDetailComponent;
  let fixture: ComponentFixture<EquipmentsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
