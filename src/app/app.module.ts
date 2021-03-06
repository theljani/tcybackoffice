import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModuleModule} from './common/material-module/material-module.module';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CertificationsToolModule} from '../app/certifications-tool/certifications-tool.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModuleModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    CertificationsToolModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
