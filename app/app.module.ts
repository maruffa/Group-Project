import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FarresProjectlistComponent } from './farres-projectlist/farres-projectlist.component';
import { FarresProjectdetailsComponent } from './farres-projectdetails/farres-projectdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    FarresProjectlistComponent,
    FarresProjectdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
