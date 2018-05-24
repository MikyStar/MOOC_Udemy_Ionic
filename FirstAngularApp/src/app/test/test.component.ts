import { Component, OnInit } from '@angular/core';
import { PEOPLE } from '../person/person';


@Component
({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit 
{
	greetings : string = ""; 
	people =  PEOPLE;

	constructor()
	{}

	ngOnInit() 
	{}

	log(event)
	{
		console.log(event);
	}
}
