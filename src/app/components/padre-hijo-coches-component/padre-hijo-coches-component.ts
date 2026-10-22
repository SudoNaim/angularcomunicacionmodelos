import { Component } from '@angular/core';
import Coche from '../../model/coche';

@Component({
  selector: 'app-padre-hijo-coches-component',
  standalone: false,
  styleUrl: './padre-hijo-coches-component.css',
  templateUrl: './padre-hijo-coches-component.html',
})
export class PadreHijoCochesComponent {
  public arrayCoches: Array<Coche>;
  constructor() {
    this.arrayCoches = new Array<Coche>();
    this.arrayCoches.push(new Coche('Toyota', 'Corolla', 180, 10));
    this.arrayCoches.push(new Coche('Honda', 'Civic', 200, 12));
    this.arrayCoches.push(new Coche('Ford', 'Focus', 190, 11));
  }
}
