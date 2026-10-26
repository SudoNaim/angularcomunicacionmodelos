import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deporte-component',
  standalone: false,
  styleUrl: './padre-deporte-component.css',
  templateUrl: './padre-deporte-component.html',
})
export class PadreDeporteComponent {
  public deportes: Array<string>;
  public mensaje: string;
  constructor() {
    this.deportes = ['Fútbol', 'Baloncesto', 'Tenis', 'Natación'];
    this.mensaje = 'Leyendo padre';
  }

  seleccionarFavoritoPadre(mensaje: string): void {
    this.mensaje = `Mi deporte favorito es ${mensaje}`;
  }
}
