import { Injectable } from '@angular/core';
import { BMI } from '../../models/bmi.models';

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
		const BMI = weight / height / height;

		return <BMI>
		{
			BMI : BMI.toFixed(2),
			classification : this.classifyBMI(BMI)
		};
	}

	private classifyBMI(bmi : number)
	{
		if( bmi < 18.5)
			return 'Underweight';
		else if( bmi > 18.5 && bmi < 24.9)
			return 'Normal weight'
		else if ( bmi > 25 && bmi < 29.9)
			return 'Overweight';
		else if( bmi > 30 && bmi < 34.9)
			return 'Class 1 obesity';
		else if( bmi > 35 && bmi < 39.9)
			return 'Class 2 obesity';
		else if (bmi > 40)
			return 'Class 3 obesity';
	}
}
