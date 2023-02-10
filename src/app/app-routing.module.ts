import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionComponent } from './sale/collection/collection.component';
import { CollectionDetailComponent } from './sale/collection/collection-detail/collection-detail.component';
import { ContactComponent } from './sale/contact/contact.component';
import { CartComponent } from './sale/cart/cart.component';
import { HomeComponent } from './sale/home/home.component';
import { BrandComponent } from './sale/brand/brand.component';
import { ProductBrandComponent } from './sale/brand/product-brand/product-brand.component';
import { ModelsComponent } from './sale/models/models.component';
import { SearchComponent } from './sale/search/search.component';
import { CheckoutComponent } from './sale/checkout/checkout.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { ProductCreateComponent } from './admin/product-create/product-create.component';
import { ProductUpdateComponent } from './admin/product-update/product-update.component';
import { ProductDeleteComponent } from './admin/product-delete/product-delete.component';

import { BrandListComponent } from './admin/brand-list/brand-list.component';
import { BrandUpdateComponent } from './admin/brand-update/brand-update.component';
import { BrandDeleteComponent } from './admin/brand-delete/brand-delete.component';
import { BrandCreateComponent } from './admin/brand-create/brand-create.component';

import { CollectionListComponent } from './admin/collection-list/collection-list.component';
import { CollectionUpdateComponent } from './admin/collection-update/collection-update.component';
import { CollectionDeleteComponent } from './admin/collection-delete/collection-delete.component';
import { CollectionCreateComponent } from './admin/collection-create/collection-create.component';

import { SlideListComponent } from './admin/slide-list/slide-list.component';
import { SlideUpdateComponent } from './admin/slide-update/slide-update.component';
import { SlideDeleteComponent } from './admin/slide-delete/slide-delete.component';
import { SlideCreateComponent } from './admin/slide-create/slide-create.component';

import { CheckoutListComponent } from './admin/checkout-list/checkout-list.component';
import { ContactListComponent } from './admin/contact-list/contact-list.component';
import { ProductDetailComponent } from './sale/models/product-detail/product-detail.component';
import { AdminComponent } from './admin/login/admin.component';
import { AboutUsComponent} from './sale/information/our_company/about-us/about-us.component';
import { RecruitmentComponent } from './sale/information/our_company/recruitment/recruitment.component';
import { ReturnPolicyComponent } from './sale/information/policy/return-policy/return-policy.component';
import { WarrantyPolicyComponent } from './sale/information/policy/warranty-policy/warranty-policy.component';
import { PrivacyPolicyComponent } from './sale/information/policy/privacy-policy/privacy-policy.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', children:[
    {path: 'product-detail/:id', component: ProductDetailComponent}
  ]},
  {path: '', children:[
    {path: 'product-brand/:id', component: ProductBrandComponent}
  ]},
  {path: '', children:[
    {path: 'collection-detail/:id', component: CollectionDetailComponent}
  ]},
  {path: '', redirectTo: 'user', pathMatch: 'full'},
  {path: 'collection', component: CollectionComponent},
  {path: 'collection', children:[
  {path: 'collection-detail/:id', component: CollectionDetailComponent}
  ]},
  {path: 'models', component: ModelsComponent},
  {path: 'models', children:[
    {path: 'product-detail/:id', component: ProductDetailComponent}
  ]},
  {path: 'brand', component: BrandComponent}, 
  {path: 'brand', children:[
    {path: 'product-brand/:id', component: ProductBrandComponent}
  ]},
  {path: 'contact', component: ContactComponent},
  {path: 'cart', component: CartComponent},
  {path: 'search', component: SearchComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'admin', component: AdminComponent},
  
  {path: 'admin-home', component: AdminHomeComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'product-create', component: ProductCreateComponent},
  {path: 'product-update/:id', component: ProductUpdateComponent},
  {path: 'product-delete/:id', component: ProductDeleteComponent},
  {path: 'brand-list', component: BrandListComponent},
  {path: 'brand-create', component: BrandCreateComponent},
  {path: 'brand-update/:id', component: BrandUpdateComponent},
  {path: 'brand-delete/:id', component: BrandDeleteComponent},
  {path: 'collection-list', component: CollectionListComponent},
  {path: 'collection-create', component: CollectionCreateComponent},
  {path: 'collection-update/:id', component: CollectionUpdateComponent},
  {path: 'collection-delete/:id', component: CollectionDeleteComponent},
  {path: 'slide-list', component: SlideListComponent},
  {path: 'slide-create', component: SlideCreateComponent},
  {path: 'slide-update/:id', component: SlideUpdateComponent},
  {path: 'slide-delete/:id', component: SlideDeleteComponent},
  {path: 'checkout-list', component: CheckoutListComponent},
  {path: 'contact-list', component: ContactListComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'recruitment', component: RecruitmentComponent},
  {path: 'return-policy', component: ReturnPolicyComponent},
  {path: 'warranty-policy', component: WarrantyPolicyComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
