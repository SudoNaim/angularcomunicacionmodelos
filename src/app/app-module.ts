import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListaProductosComponent } from './components/lista-productos-component/lista-productos-component';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { HijoCocheComponent } from './components/hijo-coche-component/hijo-coche-component';
import { PadreHijoCochesComponent } from './components/padre-hijo-coches-component/padre-hijo-coches-component';
import { PadreDeporteComponent } from './components/padre-deporte-component/padre-deporte-component';
import { DeporteComponent } from './components/deporte-component/deporte-component';
import { PadreSumaComponent } from './components/padre-suma-component/padre-suma-component';
import { HijoSumaComponent } from './components/hijo-suma-component/hijo-suma-component';
import { ComicsSimpleComponent } from './components/comics-simple-component/comics-simple-component';
import { ComicsJsonComponent } from './components/comics-json-component/comics-json-component';
import { ComicsExcelComponent } from './components/comics-excel-component/comics-excel-component';

@NgModule({
  declarations: [
    App,
    ListaProductosComponent,
    HomeComponent,
    MenuComponent,
    HijoCocheComponent,
    PadreHijoCochesComponent,
    PadreDeporteComponent,
    DeporteComponent,
    PadreSumaComponent,
    HijoSumaComponent,
    ComicsSimpleComponent,
    ComicsJsonComponent,
    ComicsExcelComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
