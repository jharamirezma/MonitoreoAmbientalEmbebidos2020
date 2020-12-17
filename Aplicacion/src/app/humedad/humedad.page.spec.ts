import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HumedadPage } from './humedad.page';

describe('HumedadPage', () => {
  let component: HumedadPage;
  let fixture: ComponentFixture<HumedadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumedadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HumedadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
