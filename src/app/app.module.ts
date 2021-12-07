import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import { NgxLoadingModule } from 'ngx-loading';
import {DragDropModule} from 'primeng/dragdrop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { LoginSectionComponent } from './components/login-section/login-section.component';
import { ModalSearchComponent } from './components/modal/modal-search/modal-search.component';
import { ModalMenuComponent } from './components/modal/modal-menu/modal-menu.component';//for navbar
import { ScrollupComponent } from './components/scrollup/scrollup.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { LoginComponent } from './main/login/login.component';
import { ListAppComponent } from './main/list-app/list-app.component';
import { HomeTitleSectionComponent } from './components/home-title-section/home-title-section.component';
import { AppListSectionComponent } from './components/app-list-section/app-list-section.component';
import { WelcomeMessageComponent } from './main/welcome-message/welcome-message.component';
import { ErgonomicsDashboardComponent } from './main/ergonomics-dashboard/ergonomics-dashboard.component';
import { ErgonomicListComponent } from './components/ergonomic-list/ergonomic-list.component';
import { ErgonomicChangeSequenceComponent } from './components/ergonomic-change-sequence/ergonomic-change-sequence.component';
import { ErgonomicCreateContentComponent } from './components/ergonomic-create-content/ergonomic-create-content.component';
import { ErgonomicUpdateContentComponent } from './components/ergonomic-update-content/ergonomic-update-content.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterSectionComponent,
    HeaderSectionComponent,
    HeroSectionComponent,
    LoginSectionComponent,
    ModalSearchComponent,
    ModalMenuComponent,
    ScrollupComponent,
    LoginComponent,
    ListAppComponent,
    HomeTitleSectionComponent,
    AppListSectionComponent,
    WelcomeMessageComponent,
    ErgonomicsDashboardComponent,
    ErgonomicListComponent,
    ErgonomicChangeSequenceComponent,
    ErgonomicCreateContentComponent,
    ErgonomicUpdateContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MessageModule,
    MessagesModule,
    ToastModule,
    BrowserAnimationsModule,
    NgxLoadingModule.forRoot({

    }),
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
