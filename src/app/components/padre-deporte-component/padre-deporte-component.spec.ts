import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PadreDeporteComponent } from './padre-deporte-component';

describe('PadreDeporteComponent', () => {
  let component: PadreDeporteComponent;
  let fixture: ComponentFixture<PadreDeporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PadreDeporteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PadreDeporteComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
