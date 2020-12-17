import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RadiacionPage } from './radiacion.page';

describe('RadiacionPage', () => {
  let component: RadiacionPage;
  let fixture: ComponentFixture<RadiacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RadiacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
