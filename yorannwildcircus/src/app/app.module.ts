import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LocationComponent } from './location/location.component';
import { RouterModule, Routes } from "@angular/router";
import { PriceComponent } from './price/price.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';


var routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: "home",
        pathMatch: "full",
        component: HomeComponent
      },
      {
        path: "gallery",
        pathMatch: "full",
        component: GalleryComponent
      },
      {
        path: "price",
        pathMatch: "full",
        component: PriceComponent
      },
     
      
      {
        path: "location",
        pathMatch: "full",
        component: LocationComponent
      },
      {
        path: "contactus",
        pathMatch: "full",
        component: ContactusComponent
      },
    ]
  },

  
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LocationComponent,
    PriceComponent,
    GalleryComponent,
    FooterComponent,
    ContactusComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
      {
        useHash: false,
        enableTracing: false,
        anchorScrolling: "enabled",
        onSameUrlNavigation: "reload",
        scrollPositionRestoration: "enabled",
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
