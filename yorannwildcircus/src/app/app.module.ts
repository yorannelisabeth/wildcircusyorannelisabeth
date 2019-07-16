import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ActivityComponent } from './activity/activity.component';
import { PlanningComponent } from './planning/planning.component';
import { TarifComponent } from './tarif/tarif.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from "@angular/router";


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
        path: "activity",
        pathMatch: "full",
        component: ActivityComponent
      },
      {
        path: "planning",
        pathMatch: "full",
        component: PlanningComponent
      },
      {
        path: "tarif",
        pathMatch: "full",
        component: TarifComponent
      },
      
      {
        path: "activity",
        pathMatch: "full",
        component: ActivityComponent
      },
     
    ]
  },

 
];

 @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ActivityComponent,
    PlanningComponent,
    TarifComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
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
