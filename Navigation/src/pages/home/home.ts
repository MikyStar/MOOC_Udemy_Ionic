import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SecondPage } from '../second/second';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage
{

	constructor(private navCtrl: NavController)
	{

	}

	navigateToSecondPage() : void
	{
		this.navCtrl.push( SecondPage );
	}

}
