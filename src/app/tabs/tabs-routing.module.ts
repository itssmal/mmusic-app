import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'charts',
        loadChildren: () => import('../pages/charts/charts.module').then(m => m.ChartsPageModule)
      },
      {
        path: 'lyrics',
        loadChildren: () => import('../pages/lyrics/lyrics.module').then(m => m.LyricsPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../pages/search/search.module').then(m => m.SearchPageModule)
      },

      {
        path: '',
        redirectTo: 'charts',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
