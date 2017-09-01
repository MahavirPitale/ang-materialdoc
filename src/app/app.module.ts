import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {AppRoutes} from './app.routes';
import { AutocompleteDemoComponent } from './autocomplete-demo/autocomplete-demo.component';
import {MdAutocompleteModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    AutocompleteDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    FormsModule,
    ReactiveFormsModule,
    MdAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
