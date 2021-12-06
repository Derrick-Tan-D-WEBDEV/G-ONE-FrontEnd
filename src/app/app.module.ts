import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeOneComponent } from './themes/theme-one/theme-one.component';
import { ActivitySectionComponent } from './components/activity-section/activity-section.component';
import { AuctionsOneSectionComponent } from './components/auctions/auctions-one-section/auctions-one-section.component';
import { AuctionsTwoSectionComponent } from './components/auctions/auctions-two-section/auctions-two-section.component';
import { AuctionsThreeSectionComponent } from './components/auctions/auctions-three-section/auctions-three-section.component';
import { AuthorSectionComponent } from './components/author-section/author-section.component';
import { AuthorProfileSectionComponent } from './components/author-profile-section/author-profile-section.component';
import { AuthorsSectionComponent } from './components/authors-section/authors-section.component';
import { CollectionsSectionComponent } from './components/collections-section/collections-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { CreateSectionComponent } from './components/create-section/create-section.component';
import { ExploreOneSectionComponent } from './components/explore/explore-one-section/explore-one-section.component';
import { ExploreTwoSectionComponent } from './components/explore/explore-two-section/explore-two-section.component';
import { ExploreThreeSectionComponent } from './components/explore/explore-three-section/explore-three-section.component';
import { ExploreFourSectionComponent } from './components/explore/explore-four-section/explore-four-section.component';
import { ExploreFiveSectionComponent } from './components/explore/explore-five-section/explore-five-section.component';
import { ExploreSixSectionComponent } from './components/explore/explore-six-section/explore-six-section.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { HelpCenterSectionComponent } from './components/help-center-section/help-center-section.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ItemDetailsSectionComponent } from './components/item-details-section/item-details-section.component';
import { LoginSectionComponent } from './components/login-section/login-section.component';
import { SignupSectionComponent } from './components/signup-section/signup-section.component';
import { ModalSearchComponent } from './components/modal/modal-search/modal-search.component';
import { ModalMenuComponent } from './components/modal/modal-menu/modal-menu.component';
import { ScrollupComponent } from './components/scrollup/scrollup.component';
import { TopSellerSectionComponent } from './components/top-seller-section/top-seller-section.component';
import { WalletSectionComponent } from './components/wallet-section/wallet-section.component';
import { WorkSectionComponent } from './components/work-section/work-section.component';
import { BreadcrumbExploreOneComponent } from './components/breadcrumb/breadcrumb-explore-one/breadcrumb-explore-one.component';
import { BreadcrumbExploreTwoComponent } from './components/breadcrumb/breadcrumb-explore-two/breadcrumb-explore-two.component';
import { BreadcrumbExploreThreeComponent } from './components/breadcrumb/breadcrumb-explore-three/breadcrumb-explore-three.component';
import { BreadcrumbExploreFourComponent } from './components/breadcrumb/breadcrumb-explore-four/breadcrumb-explore-four.component';
import { BreadcrumbLiveAuctionsComponent } from './components/breadcrumb/breadcrumb-live-auctions/breadcrumb-live-auctions.component';
import { BreadcrumbItemDetailsComponent } from './components/breadcrumb/breadcrumb-item-details/breadcrumb-item-details.component';
import { BreadcrumbActivityComponent } from './components/breadcrumb/breadcrumb-activity/breadcrumb-activity.component';
import { BreadcrumbAuthorsComponent } from './components/breadcrumb/breadcrumb-authors/breadcrumb-authors.component';
import { BreadcrumbAuthorComponent } from './components/breadcrumb/breadcrumb-author/breadcrumb-author.component';
import { BreadcrumbWalletConnectComponent } from './components/breadcrumb/breadcrumb-wallet-connect/breadcrumb-wallet-connect.component';
import { BreadcrumbCreateComponent } from './components/breadcrumb/breadcrumb-create/breadcrumb-create.component';
import { BreadcrumbLoginComponent } from './components/breadcrumb/breadcrumb-login/breadcrumb-login.component';
import { BreadcrumbSignupComponent } from './components/breadcrumb/breadcrumb-signup/breadcrumb-signup.component';
import { BreadcrumbBlogComponent } from './components/breadcrumb/breadcrumb-blog/breadcrumb-blog.component';
import { BreadcrumbBlogSingleComponent } from './components/breadcrumb/breadcrumb-blog-single/breadcrumb-blog-single.component';
import { BreadcrumbHelpCenterComponent } from './components/breadcrumb/breadcrumb-help-center/breadcrumb-help-center.component';
import { BreadcrumbContactComponent } from './components/breadcrumb/breadcrumb-contact/breadcrumb-contact.component';
import { ExploreOneComponent } from './themes/explore-one/explore-one.component';
import { ExploreTwoComponent } from './themes/explore-two/explore-two.component';
import { ExploreThreeComponent } from './themes/explore-three/explore-three.component';
import { ExploreFourComponent } from './themes/explore-four/explore-four.component';
import { LiveAuctionsComponent } from './themes/live-auctions/live-auctions.component';
import { ItemDetailsComponent } from './themes/item-details/item-details.component';
import { ActivityComponent } from './themes/activity/activity.component';
import { AuthorsComponent } from './themes/authors/authors.component';
import { AuthorComponent } from './themes/author/author.component';
import { WalletConnectComponent } from './themes/wallet-connect/wallet-connect.component';
import { CreateComponent } from './themes/create/create.component';
import { SignupComponent } from './themes/signup/signup.component';
import { ContactComponent } from './themes/contact/contact.component';
import { BlogSectionComponent } from './components/blog-section/blog-section.component';
import { BlogSingleSectionComponent } from './components/blog-single-section/blog-single-section.component';
import { BlogComponent } from './themes/blog/blog.component';
import { BlogSingleComponent } from './themes/blog-single/blog-single.component';
import { HelpCenterComponent } from './themes/help-center/help-center.component';
import { TopSellerTwoSectionComponent } from './components/top-seller-two-section/top-seller-two-section.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './main/login/login.component';
import { ListAppComponent } from './main/list-app/list-app.component';
import { HomeTitleSectionComponent } from './components/home-title-section/home-title-section.component';
import { AppListSectionComponent } from './components/app-list-section/app-list-section.component';
import { WelcomeMessageComponent } from './main/welcome-message/welcome-message.component';
import { ErgonomicsDashboardComponent } from './main/ergonomics-dashboard/ergonomics-dashboard.component';
import { ErgonomicListComponent } from './components/ergonomic-list/ergonomic-list.component';
import { ErgonomicChangeSequenceComponent } from './components/ergonomic-change-sequence/ergonomic-change-sequence.component';


import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import { ErgonomicCreateContentComponent } from './components/ergonomic-create-content/ergonomic-create-content.component';
import { NgxLoadingModule } from 'ngx-loading';
import {DragDropModule} from 'primeng/dragdrop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErgonomicUpdateContentComponent } from './components/ergonomic-update-content/ergonomic-update-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeOneComponent,
    ActivitySectionComponent,
    AuctionsOneSectionComponent,
    AuctionsTwoSectionComponent,
    AuctionsThreeSectionComponent,
    AuthorSectionComponent,
    AuthorProfileSectionComponent,
    AuthorsSectionComponent,
    CollectionsSectionComponent,
    ContactSectionComponent,
    CreateSectionComponent,
    ExploreOneSectionComponent,
    ExploreTwoSectionComponent,
    ExploreThreeSectionComponent,
    ExploreFourSectionComponent,
    ExploreFiveSectionComponent,
    ExploreSixSectionComponent,
    FaqSectionComponent,
    FooterSectionComponent,
    HeaderSectionComponent,
    HelpCenterSectionComponent,
    HeroSectionComponent,
    ItemDetailsSectionComponent,
    LoginSectionComponent,
    SignupSectionComponent,
    ModalSearchComponent,
    ModalMenuComponent,
    ScrollupComponent,
    TopSellerSectionComponent,
    WalletSectionComponent,
    WorkSectionComponent,
    BreadcrumbExploreOneComponent,
    BreadcrumbExploreTwoComponent,
    BreadcrumbExploreThreeComponent,
    BreadcrumbExploreFourComponent,
    BreadcrumbLiveAuctionsComponent,
    BreadcrumbItemDetailsComponent,
    BreadcrumbActivityComponent,
    BreadcrumbAuthorsComponent,
    BreadcrumbAuthorComponent,
    BreadcrumbWalletConnectComponent,
    BreadcrumbCreateComponent,
    BreadcrumbLoginComponent,
    BreadcrumbSignupComponent,
    BreadcrumbBlogComponent,
    BreadcrumbBlogSingleComponent,
    BreadcrumbHelpCenterComponent,
    BreadcrumbContactComponent,
    ExploreOneComponent,
    ExploreTwoComponent,
    ExploreThreeComponent,
    ExploreFourComponent,
    LiveAuctionsComponent,
    ItemDetailsComponent,
    ActivityComponent,
    AuthorsComponent,
    AuthorComponent,
    WalletConnectComponent,
    CreateComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    BlogSectionComponent,
    BlogSingleSectionComponent,
    BlogComponent,
    BlogSingleComponent,
    HelpCenterComponent,
    TopSellerTwoSectionComponent,
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
