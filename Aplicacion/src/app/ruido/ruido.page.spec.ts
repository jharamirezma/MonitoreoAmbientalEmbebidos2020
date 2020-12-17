import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RuidoPage } from './ruido.page';

describe('RuidoPage', () => {
  let component: RuidoPage;
  let fixture: ComponentFixture<RuidoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuidoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RuidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
