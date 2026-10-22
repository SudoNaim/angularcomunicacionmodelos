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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
