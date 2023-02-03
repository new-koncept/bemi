import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ReferencesComponent } from './references/references.component';
import { ThreeDComponent } from './three-d/three-d.component';

const routes: Routes = [{ path: 'home', component: HomeComponent },
{ path: 'products', component: ProductsComponent},
{ path: '3D', component: ThreeDComponent},
{ path: 'contact', component: ContactUsComponent},
{ path: 'references', component: ReferencesComponent},
{ path: '', redirectTo: '/home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
