import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoadingSpinnerPage } from './loading-spinner';



@NgModule({
  declarations: [
    LoadingSpinnerPage,
  ],
  imports: [
    IonicPageModule.forChild(LoadingSpinnerPage),
  ],
  exports: [LoadingSpinnerPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoadingSpinnerPageModule {}
