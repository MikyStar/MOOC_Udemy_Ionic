import { Component, OnInit } from '@angular/core';



@Component
({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit 
{
	greetings : string = "";

	constructor()
	{}

	ngOnInit() 
	{}

	log(event)
	{
		console.log(event);
	}
}
