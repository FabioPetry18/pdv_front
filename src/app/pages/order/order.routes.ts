import { Routes } from '@angular/router';
import { OrderNewComponent } from './new/order.component';

export const routes: Routes = [

      {
        path: '',
        component: OrderNewComponent,
        data: {
          title: 'routes.login'
        }
    },
    {
        path: 'new',
        component: OrderNewComponent,
        data: {
          title: 'routes.login'
        }
    },
];
