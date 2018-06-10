import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BmiPage } from './bmi';
import { BmiProvider } from '../../providers/bmi/bmi';

@NgModule({
  declarations: [
    BmiPage,
  ],
  imports: [
    IonicPageModule.forChild(BmiPage),
	],
	providers : [BmiProvider],
})
export class BmiPageModule {}
