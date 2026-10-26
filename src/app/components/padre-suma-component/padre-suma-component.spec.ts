import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PadreSumaComponent } from './padre-suma-component';

describe('PadreSumaComponent', () => {
  let component: PadreSumaComponent;
  let fixture: ComponentFixture<PadreSumaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PadreSumaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PadreSumaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
