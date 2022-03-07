import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserformComponent } from './userform/userform.component';
import { HttpClientModule } from '@angular/common/http';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { RoutingModule } from './routing/routing.module';
@NgModule({
  declarations: [
    AppComponent,
    UserformComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
