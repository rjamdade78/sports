import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchesComponent } from './matches/matches.component';
import { CustomdatePipe } from './pipe/customdate.pipe';
import { MatchInformationComponent } from './match-information/match-information.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchesComponent,
    CustomdatePipe,
    MatchInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
