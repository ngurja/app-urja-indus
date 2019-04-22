import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './website/website.module#WebsiteModule'
  },
  {
      path: '',
      loadChildren: './admin/admin.module#AdminModule',
      canActivate: [AuthGuard]
  },
  {
      path: 'login',
      loadChildren: './login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
