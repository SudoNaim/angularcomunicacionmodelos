import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ListaProductosComponent } from './components/lista-productos-component/lista-productos-component';
import { PadreHijoCochesComponent } from './components/padre-hijo-coches-component/padre-hijo-coches-component';
import { PadreDeporteComponent } from './components/padre-deporte-component/padre-deporte-component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: `lista-productos`, component: ListaProductosComponent},
  {path: `padre-hijo-coches`, component: PadreHijoCochesComponent},
  {path: `padre-deporte`, component: PadreDeporteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
