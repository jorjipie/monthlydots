import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DotgridComponent } from './dotgrid/dotgrid.component';
import { MonthdotComponent } from './monthdot/monthdot.component';

@NgModule({
  declarations: [
    AppComponent,
    DotgridComponent,
    MonthdotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
