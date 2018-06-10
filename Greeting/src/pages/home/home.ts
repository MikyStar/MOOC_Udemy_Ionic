import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component(
{
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage
{
	personName : string;

	constructor(public navCtrl: NavController)
	{}

	showGreeting(name : string)
	{
		console.log(name);
		console.log(this.personName);
	}

}
