import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { Routes, RouterModule } from "@angular/router";

import { FlashMessagesModule } from 'angular2-flash-messages';



import { AppComponent } from './app.component';
import { InformationComponent } from './information/information.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};


// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyDLIZa9vSVB-RafFJfjvJhhciSoIeoozDk',
  authDomain: 'paritron-78f39.firebaseapp.com',
  databaseURL: 'https://paritron-78f39.firebaseio.com',
  storageBucket: 'paritron-78f39.appspot.com',
  messagingSenderId: '993123772829'
};



const appRoutes: Routes = [
    {path: '', redirectTo: 'information', pathMatch: 'full'},
    {path: 'information', component: InformationComponent},
    {path: 'about', component: AboutComponent} ,
    {path: 'contact', component: ContactComponent},
] 

@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    FooterComponent,
    AboutComponent,
    HeaderComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
