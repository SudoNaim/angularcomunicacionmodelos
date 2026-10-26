import { Component, ChangeDetectorRef } from '@angular/core';
import * as XLSX from 'xlsx';
import Comic from '../../model/comic';
@Component({
  selector: 'app-comics-excel-component',
  standalone: false,
  styleUrl: './comics-excel-component.css',
  templateUrl: './comics-excel-component.html',
})
export class ComicsExcelComponent {
  public arrayComics: Array<Comic>;
  
  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.arrayComics = [];
  }

  cargarComic(): void {
    let path = './assets/comics.xlsx';
    fetch(path).then(response => response.arrayBuffer()).then((buffer) => {
      //leer buffer y transomarlo a libro de excel
      let workbook= XLSX.read(buffer, { type: 'array' });
      //para recuperar las hojas del libro se hace por name
      //recuperamos el name de la hoja
      let hojaName = workbook.SheetNames[0];
      let hoja = workbook.Sheets[hojaName];
      let data = XLSX.utils.sheet_to_json(hoja);
      console.log(data);
      this.arrayComics = data.map((c: any) => new Comic(c.nombre, c.imagen, c.descripcion));
      this.changeDetectorRef.detectChanges();
      
    })
  }
}
