import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from "@angular/router";



import { AppComponent } from './app.component';
import { InformationComponent } from './information/information.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { ListingComponent } from './listing/listing.component';






const appRoutes: Routes = [
    {path: '', redirectTo: 'information', pathMatch: 'full'},
    {path: 'information', component: InformationComponent},
    {path: 'about', component: AboutComponent} ,
    {path: 'contact', component: ContactComponent},
    {path: 'list', component: ListingComponent},

] 

@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    FooterComponent,
    AboutComponent,
    HeaderComponent,
    ContactComponent,
    ListingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
