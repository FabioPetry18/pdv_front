import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './layout/layoutWithSideBar';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full' 
    },
    {
        path: 'auth/login',
        component: LoginComponent,
        data: {
          title: 'routes.login'
        }
    },
    {
        path: 'pedido',
        component: MainLayoutComponent,
        loadChildren: () => import('./pages/order/order.routes').then(r => r.routes)
    }
];
