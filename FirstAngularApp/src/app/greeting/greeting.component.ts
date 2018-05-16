import { Component, OnInit } from '@angular/core';

// tslint:disable:one-line no-trailing-whitespace indent quotemark typedef-whitespace

@Component
({
	selector: 'app-greeting',
	templateUrl: './greeting.component.html',
	styleUrls: ['./greeting.component.css']
})

export class GreetingComponent implements OnInit 
{
	names : string[] = ["Paul", "Dave", "Katie", "Owen", "John"];

	constructor()
	{}

	ngOnInit()
	{}

}
