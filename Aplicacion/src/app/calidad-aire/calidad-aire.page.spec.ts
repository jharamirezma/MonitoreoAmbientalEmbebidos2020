import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalidadAirePage } from './calidad-aire.page';

describe('CalidadAirePage', () => {
  let component: CalidadAirePage;
  let fixture: ComponentFixture<CalidadAirePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalidadAirePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalidadAirePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
