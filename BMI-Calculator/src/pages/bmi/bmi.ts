import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { BmiProvider } from '../../providers/bmi/bmi'
import { BMI } from '../../models/bmi.models';

/**
 * Generated class for the BmiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage() /* For lazy loading the page */

@Component({
	selector: 'page-bmi',
	templateUrl: 'bmi.html',
})
export class BmiPage
{
	height : number;
	weight : number;
	bmi : BMI ;

	constructor(private bmiProvider : BmiProvider)
	{}

	calculateBMI()
	{
		this.bmi = this.bmiProvider.calculateBMI(this.height, this.weight);
	}
}
