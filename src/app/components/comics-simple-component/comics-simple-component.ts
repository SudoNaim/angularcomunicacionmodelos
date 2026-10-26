import { Component } from '@angular/core';
import Comic from '../../model/comic';

@Component({
  selector: 'app-comics-simple-component',
  standalone: false,
  styleUrl: './comics-simple-component.css',
  templateUrl: './comics-simple-component.html',
})
export class ComicsSimpleComponent {
  public arrayComics: Array<Comic> = [];
  constructor() {
    this.arrayComics = [];
  }

  cargarComic(): void {
    this.arrayComics = []
  }
}
