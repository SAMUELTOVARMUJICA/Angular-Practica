import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModulo } from './Heroes/heroes.module';
import { ContadorModulo } from './contador/contador/contador.module';


@NgModule({
  declarations: [
    AppComponent,
  

  
  ],
  imports:[ 
    BrowserModule,
    HeroesModulo,
    ContadorModulo

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
