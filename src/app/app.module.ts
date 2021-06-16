import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HomeComponent } from '../components/home/home.component';
import { OpportunitiesComponent } from '../components/opportunities/opportunities.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { EventsComponent } from '../components/events/events.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MinecraftZooComponent } from '../components/minecraft-zoo/minecraft-zoo.component';
import { MeetTheTeamComponent } from '../components/meet-the-team/meet-the-team.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';

//Need to resave each time there is a new component
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    OpportunitiesComponent,
    NotFoundComponent,
    EventsComponent,
    FooterComponent,
    MinecraftZooComponent,
    MeetTheTeamComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '', 
        component: HomeComponent
      },
      {
        path: 'opportunities', 
        component: OpportunitiesComponent
      },
      {
        path: 'events',
        component: EventsComponent
      },
      {
        path: 'events/minecraft-zoo',
        component: MinecraftZooComponent
      },
      {
        path: 'meet-the-team',
        component: MeetTheTeamComponent
      },
      {
        path: 'about',
        component: AboutUsComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
