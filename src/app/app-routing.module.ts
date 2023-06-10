import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule)},
  // {path:'**',loadChildren:() => import('./modules/error-page/error-page.module').then(m => m.ErrorPageModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
