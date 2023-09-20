import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddProductComponent } from './components/add-product/add-product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home' ,pathMatch:'full' },
  { path: 'cart', component: CartComponent },
  { path: 'product/:id', component: SingleProductComponent},
  { path: 'new-product', component: AddProductComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
