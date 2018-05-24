import { Component, OnInit } from '@angular/core';
import { PEOPLE, Person } from '../person/person';


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
	personName : Person;

	constructor()
	{}

	addPerson(personName)
	{
		this.people.push({name : personName});
	}

	ngOnInit() 
	{}
}
