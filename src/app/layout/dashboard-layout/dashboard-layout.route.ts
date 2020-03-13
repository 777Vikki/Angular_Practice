import {Routes} from '@angular/router';
import {DashboardLayoutComponent} from './dashboard-layout.component';

export const routes: Routes = [
    {
        path: 'module1',
        component: DashboardLayoutComponent,
        loadChildren: () =>
            import('./../../module1/module1.module').then(mod => mod.Module1Module)
    },
    {
        path: 'module2',
        component: DashboardLayoutComponent,
        loadChildren: () =>
            import('./../../module2/module2.module').then(mod => mod.Module2Module)
    }
];
