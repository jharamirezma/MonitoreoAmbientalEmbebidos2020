import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrecipitacionPage } from './precipitacion.page';

describe('PrecipitacionPage', () => {
  let component: PrecipitacionPage;
  let fixture: ComponentFixture<PrecipitacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecipitacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrecipitacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
