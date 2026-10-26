import { Component, ChangeDetectorRef } from '@angular/core';
import Comic from '../../model/comic';

@Component({
  selector: 'app-comics-json-component',
  standalone: false,
  styleUrl: './comics-json-component.css',
  templateUrl: './comics-json-component.html',
})
export class ComicsJsonComponent {
  public arrayComics: Array<Comic>;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.arrayComics = [];
  }

  cargarComic(): void {
    let path = './assets/comics.json';
    fetch(path)
      .then((response) => {
        return response.json();
      })
      .then((data: [any]) => {
        for (let element of data) {
          let comic = new Comic(element.nombre, element.imagen, element.descripcion);
          this.arrayComics.push(comic);
          console.log(element);
        }
        this.changeDetectorRef.detectChanges();
      });
    
  }
}
