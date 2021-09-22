import { HeaderModule } from './header/header.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AccessPoundsComponent } from './access-pounds/access-pounds.component';
import { TrajectoryComponent } from './content/trajectory/trajectory.component';
import { WorksComponent } from './content/works/works.component';



@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FooterComponent,
    AccessPoundsComponent,
    TrajectoryComponent,
    WorksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

