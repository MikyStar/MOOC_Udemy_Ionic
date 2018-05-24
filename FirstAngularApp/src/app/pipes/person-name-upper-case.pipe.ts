import { Pipe, PipeTransform } from '@angular/core';

@Pipe
({
	name: 'personNameUpperCase'
})

export class PersonNameUpperCasePipe implements PipeTransform 
{
	transform(value: string, args?: any): any // The ? means it's not necessarly needed
	{
		return `${value.toUpperCase()}, have a nice day 1 + 1 = ${1 + 1}`;
	}
}
