import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule, routes } from './app-routing.module'
import { AppComponent } from './app.component'
import { LandingComponent } from './views/landing/landing.component'
import { provideRouter, withComponentInputBinding } from '@angular/router'

import { DetailsComponent } from './views/details/details.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button'
import { HeroComponent } from './components/hero/hero.component'
import { RandomTimeStampPipe } from './pipes/random-time-stamp.pipe'

@NgModule({
  declarations: [AppComponent, LandingComponent, DetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HeroComponent,
    RandomTimeStampPipe
  ],
  providers: [provideRouter(routes, withComponentInputBinding())],
  bootstrap: [AppComponent]
})
export class AppModule {}
