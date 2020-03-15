import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {DatePipe} from "@angular/common";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule
} from '@angular/material';
import { AddWebsiteDialogComponent } from './add-website-dialog/add-website-dialog.component';
import { CampaignComponent } from './campaign/campaign.component';
import { MatStepperModule } from '@angular/material/stepper';
import { HomeComponent } from './home/home.component';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { ViewCampaignComponent } from './view-campaign/view-campaign.component';
import { ConfirmRegistrationComponent } from './auth/confirm-registration/confirm-registration.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {AuthService} from './auth/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from './guards/auth.guard';
import { SiteSetupDialogComponent } from './site-setup-dialog/site-setup-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AddWebsiteDialogComponent,
    CampaignComponent,
    HomeComponent,
    ViewCampaignComponent,
    ConfirmRegistrationComponent,
    LoginComponent,
    RegisterComponent,
    SiteSetupDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    NgxDatatableModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AmazingTimePickerModule,
    MatCheckboxModule,
    FlashMessagesModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [DatePipe, AuthService, AuthGuard],
  entryComponents: [AddWebsiteDialogComponent, ViewCampaignComponent, SiteSetupDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
