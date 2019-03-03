import { NgModule } from '@angular/core';
import { IonicPageModule, InfiniteScroll } from 'ionic-angular';
import { GalleryPage } from './gallery';
import { LoadingSpinnerPage } from '../loading-spinner/loading-spinner';
import { DirectivesModule } from '../../directives/directives.module';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { PaginationService } from '../../providers/pagination.service';



@NgModule({
  declarations: [
    GalleryPage,
    LoadingSpinnerPage
  ],
  imports: [
    IonicPageModule.forChild(GalleryPage),
    DirectivesModule,
    InfiniteScrollModule
    
  ],
  providers: [
    PaginationService
  ]
})
export class GalleryPageModule {}
