import { Component } from '@angular/core';

// tslint:disable:one-line no-trailing-whitespace indent quotemark typedef-whitespace

@Component
({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent 
{
	title = 'FirstAngularApp';

	sayHello() 
	{
    	alert("Hello");
	}
}
