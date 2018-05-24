import { Component, OnInit } from '@angular/core';

@Component
({
	selector: 'app-greeting',
	templateUrl: './greeting.component.html',
	styleUrls: ['./greeting.component.css']
})

export class GreetingComponent implements OnInit 
{
	// names : { name : string }[] = [{ name : "Paul"}, { name : "Dave"}, { name : "Katie"}, { name : "Owen"}, { name : "John"}];

	constructor()
	{}

	ngOnInit()
	{}
} 
