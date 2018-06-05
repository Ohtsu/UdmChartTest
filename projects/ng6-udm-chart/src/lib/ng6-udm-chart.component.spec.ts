import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng6UdmChartComponent } from './ng6-udm-chart.component';

describe('Ng6UdmChartComponent', () => {
  let component: Ng6UdmChartComponent;
  let fixture: ComponentFixture<Ng6UdmChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng6UdmChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng6UdmChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
