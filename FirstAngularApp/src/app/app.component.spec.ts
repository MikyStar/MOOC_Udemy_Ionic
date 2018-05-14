import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

// tslint:disable:one-line no-trailing-whitespace indent quotemark

describe("AppComponent", () => 
{
	beforeEach(async(() =>
	{
		TestBed.configureTestingModule(
		{
			declarations: 
			[
				AppComponent
			],
		}).compileComponents();
	}));

	it("should create the app", async(() => 
	{
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;

		expect(app).toBeTruthy();
	}));

	it("should have as title 'FirstAngularApp'", async(() => 
	{
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;

		expect(app.title).toEqual('FirstAngularApp');
	}));

	it("should render title in a h1 tag", async(() => 
	{
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		
		expect(compiled.querySelector('h1').textContent).toContain('Welcome to FirstAngularApp!');
	}));

});
