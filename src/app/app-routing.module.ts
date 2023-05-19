import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarDetailsComponent } from './nav-bar-details/nav-bar-details.component';
import { BlogDetailsComponent } from './modules/blog-details/blog-details.component';

const routes: Routes = [
  {
    path: 'navbar',
    component:NavBarDetailsComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'blog/:id',
        component: BlogDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
