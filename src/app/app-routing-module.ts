import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ListaProductosComponent } from './components/lista-productos-component/lista-productos-component';
import { PadreHijoCochesComponent } from './components/padre-hijo-coches-component/padre-hijo-coches-component';
import { PadreDeporteComponent } from './components/padre-deporte-component/padre-deporte-component';
import { PadreSumaComponent } from './components/padre-suma-component/padre-suma-component';
import { ComicsSimpleComponent } from './components/comics-simple-component/comics-simple-component';
import { ComicsJsonComponent } from './components/comics-json-component/comics-json-component';
import { ComicsExcelComponent } from './components/comics-excel-component/comics-excel-component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: `lista-productos`, component: ListaProductosComponent},
  {path: `padre-hijo-coches`, component: PadreHijoCochesComponent},
  {path: `padre-deporte`, component: PadreDeporteComponent},
  {path: `padre-suma`, component: PadreSumaComponent},
  {path: `comics-simple`, component: ComicsSimpleComponent},
  {path: `comics-json`, component: ComicsJsonComponent},
  {path: `comics-excel`, component: ComicsExcelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
