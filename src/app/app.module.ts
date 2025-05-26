import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiComponente } from './components/mi-componente/mi-componente.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MiComponente
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
