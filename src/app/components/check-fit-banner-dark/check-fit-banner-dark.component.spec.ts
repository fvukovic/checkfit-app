import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckFitBannerDarkComponent } from './check-fit-banner-dark.component';

describe('CheckFitBannerDarkComponent', () => {
  let component: CheckFitBannerDarkComponent;
  let fixture: ComponentFixture<CheckFitBannerDarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckFitBannerDarkComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckFitBannerDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
