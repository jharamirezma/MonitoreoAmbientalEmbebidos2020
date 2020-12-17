import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonoxidoPage } from './monoxido.page';

describe('MonoxidoPage', () => {
  let component: MonoxidoPage;
  let fixture: ComponentFixture<MonoxidoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonoxidoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonoxidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
