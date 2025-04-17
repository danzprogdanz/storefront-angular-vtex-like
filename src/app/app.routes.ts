import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { NotFoundComponent } from './features/notFound/notFound.component';
import { CheckoutComponent } from './features/checkout/checkout.component';
import { CartComponent } from './features/cart/cart.component';
import { ProductComponent } from './features/product/product.component';

export const routes: Routes = [
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product', component: ProductComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];
