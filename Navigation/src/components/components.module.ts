import { NgModule } from '@angular/core';
import { MenuListModule } from './menu-list/menu-list';
import { AboutComponent } from './about/about';

@NgModule({
	declarations: [MenuListModule,
		AboutComponent],
	imports: [],
	exports: [MenuListModule,
		AboutComponent]
})
export class ComponentsModule { }
