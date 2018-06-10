import { Injectable } from '@angular/core';

/*
  Generated class for the BmiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BmiProvider
{
	calculateBMI(height: number, weight: number)
	{
		return weight / height / height;
	}
}
