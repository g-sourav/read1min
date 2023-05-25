import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarDetailsComponent } from './nav-bar-details/nav-bar-details.component';
import { BlogDetailsComponent } from './modules/blog-details/blog-details.component';
import { BlogPageComponent } from './modules/blog-page/blog-page.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component:NavBarDetailsComponent,
  //   children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'page/:id',
        component: BlogPageComponent
      },
      {
        path: 'blog/:id',
        component: BlogDetailsComponent
      },
      {
        path: '',
        component: BlogDetailsComponent,
        children:[
          {
            path: 'blog/:search',
            component: BlogDetailsComponent
          }
        ]
      }
    //]
  //}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
