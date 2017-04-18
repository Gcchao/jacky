import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import { AppComponent } from "./app.component";
import { InformationComponent } from "./information/information.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";

export const router: Routes = [

    {path: '', redirectTo: 'information', pathMatch: 'full'},
    {path: 'information', component: InformationComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent}


];
export const routes: ModuleWithProviders = RouterModule.forRoot(router);