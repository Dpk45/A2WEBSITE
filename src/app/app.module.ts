import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import {NavbarComponent} from './component/navbar/navbar.component'
import {JumbotronComponent} from './component/jumbotron/jumbotron.component'
import {HomeComponent} from './component/pages/home.component'
import {AboutComponent} from './component/pages/about.component'

import {routing} from './app.routing'


@NgModule({
  imports:      [ BrowserModule ,routing],
  declarations: [ AppComponent,NavbarComponent,JumbotronComponent,HomeComponent,AboutComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
