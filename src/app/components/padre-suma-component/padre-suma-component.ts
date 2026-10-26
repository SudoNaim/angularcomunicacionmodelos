import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-suma-component',
  standalone: false,
  styleUrl: './padre-suma-component.css',
  templateUrl: './padre-suma-component.html',
})
export class PadreSumaComponent {
  public mensaje : string;
  public resultado : number = 0;

  sumarNumeros(numero: string) : void{
    let nuevoResultado = parseInt(numero);
    this.resultado += nuevoResultado;
    this.mensaje = `El resultado de la suma es ${this.resultado}`;
  }

  constructor() {
    this.mensaje = `de momento vacío`;
  }

}
