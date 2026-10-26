import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-hijo-suma-component',
  standalone: false,
  styleUrl: './hijo-suma-component.css',
  templateUrl: './hijo-suma-component.html',
})
export class HijoSumaComponent {
  @Input() numero: number = 0;
  @Output() sumarNumero: EventEmitter<any> = new EventEmitter();

  sumar() : void{
    this.sumarNumero.emit(this.numero);
  }
}
