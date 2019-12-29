import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SearchInputComponent } from './search-input.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
      SearchInputComponent 
    ],
    imports: [
      BrowserModule
    ],
    exports: [
      SearchInputComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  })
  export class SearchModule { }