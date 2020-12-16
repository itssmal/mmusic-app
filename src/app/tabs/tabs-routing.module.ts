import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'album',
        loadChildren: () => import('../pages/album-details/album-details.module').then(m => m.AlbumDetailsPageModule)
      },
      {
        path: 'artist',
        loadChildren: () => import('../pages/artist-details/artist-details.module').then(m => m.ArtistDetailsPageModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('../pages/charts/charts.module').then(m => m.ChartsPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../pages/search/search.module').then(m => m.SearchPageModule)
      },
      {
        path: 'playlist',
        loadChildren: () => import('../pages/playlist/playlist.module').then(m => m.PlaylistPageModule)
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
