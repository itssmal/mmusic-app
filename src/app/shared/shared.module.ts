import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArtistComponent} from "./components/artist/artist.component";
import {IonicModule} from "@ionic/angular";
import {AlbumComponent} from "./components/album/album.component";
import {SharedRoutingModule} from "./shared-routing.module";
import {TrackComponent} from "./components/track/track.component";


@NgModule({
  declarations: [
      ArtistComponent,
      AlbumComponent,
      TrackComponent,
  ],
    exports: [
        ArtistComponent,
        AlbumComponent,
        TrackComponent,
    ],
  imports: [
    CommonModule,
    IonicModule,
    SharedRoutingModule,
  ]
})
export class SharedModule { }
