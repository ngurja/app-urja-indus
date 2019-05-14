import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebsiteComponent } from './website.component';

const routes: Routes = [
    {
        path: '',
        component: WebsiteComponent,
        children: [
            {
                path: '',
                redirectTo: 'home'
            },
            {
                path: 'home',
                loadChildren: './home/home.module#HomeModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WebsiteRoutingModule {}
