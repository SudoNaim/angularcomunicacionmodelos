import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deporte-component',
  standalone: false,
  styleUrl: './padre-deporte-component.css',
  templateUrl: './padre-deporte-component.html',
})
export class PadreDeporteComponent {
  public deportes: Array<string>;

  constructor() {
    this.deportes = ['Fútbol', 'Baloncesto', 'Tenis', 'Natación'];
  }
  
}
