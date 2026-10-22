import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PadreHijoCochesComponent } from './padre-hijo-coches-component';

describe('PadreHijoCochesComponent', () => {
  let component: PadreHijoCochesComponent;
  let fixture: ComponentFixture<PadreHijoCochesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PadreHijoCochesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PadreHijoCochesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
