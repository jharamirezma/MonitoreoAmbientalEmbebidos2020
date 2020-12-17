import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LuzPage } from './luz.page';

describe('LuzPage', () => {
  let component: LuzPage;
  let fixture: ComponentFixture<LuzPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuzPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LuzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
