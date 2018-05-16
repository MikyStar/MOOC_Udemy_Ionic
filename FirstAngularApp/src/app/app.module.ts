import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { GreetingComponent } from './greeting/greeting.component';

// tslint:disable:one-line no-trailing-whitespace indent quotemark typedef-whitespace

@NgModule
({
	declarations: 
	[
		AppComponent,
		TestComponent,
		GreetingComponent
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
