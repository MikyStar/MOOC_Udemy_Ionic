import { Component, OnInit } from '@angular/core';

// tslint:disable:one-line no-trailing-whitespace indent quotemark typedef-whitespace

@Component
({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit 
{
	greetings : string;

	constructor()
	{}

	ngOnInit() 
	{}

	log(event)
	{
		console.log(event);
	}
}
