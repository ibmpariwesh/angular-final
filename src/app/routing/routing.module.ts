import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from '../second/second.component';
import { FirstComponent } from '../first/first.component';
import { UserformComponent } from '../userform/userform.component';

const routes: Routes = [
  {path: 'first-component', component: FirstComponent  },
  { path: 'second-component', component: SecondComponent },
  { path: 'userform', component: UserformComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
