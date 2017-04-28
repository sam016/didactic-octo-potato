import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { OrderNewComponent } from './components/order-new/order-new.component';
import { OrderAllComponent } from './components/order-all/order-all.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { FoodmenuComponent } from './components/foodmenu/foodmenu.component';

const appRoutes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'menu', component: FoodmenuComponent },
    { path: 'order', component: OrderAllComponent },
    { path: 'order/new', component: OrderNewComponent },
    { path: 'order/:id', component: OrderDetailComponent }
];

export const AppRouter: ModuleWithProviders = RouterModule.forRoot(appRoutes);
