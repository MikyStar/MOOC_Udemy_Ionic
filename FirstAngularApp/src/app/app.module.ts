import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { GreetingComponent } from './greeting/greeting.component';
import { PersonNameUpperCasePipe } from './pipes/person-name-upper-case.pipe';



@NgModule
({
	declarations: 
	[
		AppComponent,
		TestComponent,
		GreetingComponent,
		PersonNameUpperCasePipe
	],
	imports: 
	[
		BrowserModule,
		FormsModule,
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
