import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertiesListComponent } from './properties/properties-list/properties-list.component';
import { PropertyService } from './shared/services/property.service';
import { PusherService } from './shared/services/pusher.service';
import { DashboardService } from './shared/services/dashboard.service';
import { FeedbackService } from './shared/services/feedback.service';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { PropertyCreateComponent } from './properties/property-create/property-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertySingleComponent } from './properties/property-single/property-single.component';
import { PropertyUpdateComponent } from './properties/property-update/property-update.component';
import { AuthComponent } from './auth/auth.component';
import { AuthSlyService } from './shared/services/authsly.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardCreateComponent } from './dashboard/dashboard-create/dashboard-create.component';
import { DashboardEditComponent } from './dashboard/dashboard-edit/dashboard-edit.component';
import { DashboardSingleComponent } from './dashboard/dashboard-single/dashboard-single.component';
import { DashboardListComponent } from './dashboard/dashboard-list/dashboard-list.component';
import { AuthGuard } from './shared/guards/guards.service';

import { AuthHttp,AuthConfig, AuthModule } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackListComponent } from './feedback/feedback-list/feedback-list.component';
import { FeedbackCreateComponent } from './feedback/feedback-create/feedback-create.component';
import { FeedbackSingleComponent } from './feedback/feedback-single/feedback-single.component';
import { FeedbackUpdateComponent } from './feedback/feedback-update/feedback-update.component';


export function authHttpFactory(http:Http,options:RequestOptions){
  return new AuthHttp(new AuthConfig({
    tokenGetter:(()=>localStorage.getItem('access_token')),
    noJwtError:true
  }),http,options);
}



@NgModule({
  declarations: [
    AppComponent,
    PropertiesComponent,
    PropertiesListComponent,
    PropertyCreateComponent,
    PropertySingleComponent,
    PropertyUpdateComponent,
    AuthComponent,
    DashboardComponent,
    DashboardCreateComponent,
    DashboardEditComponent,
    DashboardSingleComponent,
    DashboardListComponent,
    FeedbackComponent,
    FeedbackListComponent,
    FeedbackCreateComponent,
    FeedbackSingleComponent,
    FeedbackUpdateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
    
  ],
  providers: [
    PropertyService,
    PusherService,
    AuthGuard,
    AuthSlyService,
    {
      provide:AuthHttp,
      useFactory:authHttpFactory,
      deps:[Http,RequestOptions]
    },
    FeedbackService,
    DashboardService,
    PropertyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
