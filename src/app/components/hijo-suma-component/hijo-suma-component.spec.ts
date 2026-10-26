import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HijoSumaComponent } from './hijo-suma-component';

describe('HijoSumaComponent', () => {
  let component: HijoSumaComponent;
  let fixture: ComponentFixture<HijoSumaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HijoSumaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HijoSumaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
