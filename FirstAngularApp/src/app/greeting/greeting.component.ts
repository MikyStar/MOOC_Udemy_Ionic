import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person/person';

@Component
({
	selector: 'app-greeting',
	templateUrl: './greeting.component.html',
	styleUrls: ['./greeting.component.css']
})

export class GreetingComponent implements OnInit 
{
	// names : { name : string }[] = [{ name : "Paul"}, { name : "Dave"}, { name : "Katie"}, { name : "Owen"}, { name : "John"}];

	@Input() person : Person;

	constructor()
	{}

	ngOnInit()
	{}
} 
