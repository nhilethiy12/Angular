import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './sale/home/home.component';
import { NavComponent } from './sale/nav/nav.component';
import { SearchComponent } from './sale/search/search.component';
import { ModelsComponent } from './sale/models/models.component';
import { CollectionComponent } from './sale/collection/collection.component';
import { CollectionDetailComponent } from './sale/collection/collection-detail/collection-detail.component';
import { ProductDetailComponent } from './sale/models/product-detail/product-detail.component';
import { ContactComponent } from './sale/contact/contact.component';
import { BrandComponent } from './sale/brand/brand.component';
import { ProductBrandComponent } from './sale/brand/product-brand/product-brand.component';
import { FooterComponent } from './sale/footer/footer.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { ProductCreateComponent } from './admin/product-create/product-create.component';
import { ProductUpdateComponent } from './admin/product-update/product-update.component';
import { ProductDeleteComponent } from './admin/product-delete/product-delete.component';
import { BrandListComponent } from './admin/brand-list/brand-list.component';
import { BrandCreateComponent } from './admin/brand-create/brand-create.component';
import { BrandUpdateComponent } from './admin/brand-update/brand-update.component';
import { BrandDeleteComponent } from './admin/brand-delete/brand-delete.component';
import { CollectionListComponent } from './admin/collection-list/collection-list.component';
import { CollectionCreateComponent } from './admin/collection-create/collection-create.component';
import { CollectionUpdateComponent } from './admin/collection-update/collection-update.component';
import { CollectionDeleteComponent } from './admin/collection-delete/collection-delete.component';
import { SlideListComponent } from './admin/slide-list/slide-list.component';
import { SlideCreateComponent } from './admin/slide-create/slide-create.component';
import { SlideUpdateComponent } from './admin/slide-update/slide-update.component';
import { SlideDeleteComponent } from './admin/slide-delete/slide-delete.component';
import { CheckoutListComponent } from './admin/checkout-list/checkout-list.component';
import { ContactListComponent } from './admin/contact-list/contact-list.component';

import { AdminComponent } from './admin/login/admin.component';
import { CartComponent } from './sale/cart/cart.component';
import { AboutUsComponent } from './sale/information/our_company/about-us/about-us.component';

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { RecruitmentComponent } from './sale/information/our_company/recruitment/recruitment.component';
import { WarrantyPolicyComponent } from './sale/information/policy/warranty-policy/warranty-policy.component';
import { ReturnPolicyComponent } from './sale/information/policy/return-policy/return-policy.component';
import { PrivacyPolicyComponent } from './sale/information/policy/privacy-policy/privacy-policy.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
  
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { CheckoutComponent } from './sale/checkout/checkout.component';
import { UploadComponent } from './upload/upload.component';
import { OrderModule } from 'ngx-order-pipe';



@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    NavComponent,
    SearchComponent,
    AdminComponent,
    ModelsComponent,
    CollectionComponent,
    CollectionDetailComponent,
    ProductDetailComponent,
    ContactComponent,
    BrandComponent,
    ProductBrandComponent,
    FooterComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    BrandListComponent,
    BrandCreateComponent,
    BrandUpdateComponent,
    BrandDeleteComponent,
    CollectionListComponent,
    CollectionCreateComponent,
    CollectionUpdateComponent,
    CollectionDeleteComponent,
    SlideListComponent,
    SlideCreateComponent,
    SlideUpdateComponent,
    SlideDeleteComponent,
    CartComponent,
    AboutUsComponent,
    RecruitmentComponent,
    WarrantyPolicyComponent,
    ReturnPolicyComponent,
    PrivacyPolicyComponent,
    AdminHomeComponent,
    CheckoutComponent,
    CheckoutListComponent,
    ContactListComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxUsefulSwiperModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    OrderModule
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],

  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
