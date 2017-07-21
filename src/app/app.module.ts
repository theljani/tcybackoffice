import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MdInputModule, MdRadioModule} from '@angular/material';

import {CertificationsToolModule} from '../app/certifications-tool/certifications-tool.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdInputModule,
    MdRadioModule,
    FormsModule,
    HttpModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    CertificationsToolModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
