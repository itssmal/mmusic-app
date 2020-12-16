import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartsPage } from './charts.page';
import {CategoryComponent} from "./category/category.component";

const routes: Routes = [
  {
    path: '',
    component: ChartsPage
  },
  {
    path: 'category/:id',
    component: CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsPageRoutingModule {}
