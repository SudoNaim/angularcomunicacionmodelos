import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-deporte-component',
  standalone: false,
  styleUrl: './deporte-component.css',
  templateUrl: './deporte-component.html',
})
export class DeporteComponent {
  @Input() sport: string = '';
  public mensaje!: string;
  @Output() seleccionarFavoritoPadre: EventEmitter<any> = new EventEmitter();

  mostrarFavotito() : void{
    this.seleccionarFavoritoPadre.emit(this.sport);
    this.mensaje = `Mi deporte favorito es ${this.sport}`;
  }
}
