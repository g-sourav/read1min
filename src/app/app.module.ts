import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarDetailsComponent } from './nav-bar-details/nav-bar-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogDetailsComponent } from './modules/blog-details/blog-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogPageComponent } from './modules/blog-page/blog-page.component';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SharedBlogDataService } from './modules/shared-blog-data.service';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarDetailsComponent,
    DashboardComponent,
    BlogDetailsComponent,
    BlogPageComponent,SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  providers: [SharedBlogDataService,{ provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
