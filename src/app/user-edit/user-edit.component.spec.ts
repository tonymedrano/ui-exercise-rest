import { TestBed, inject } from '@angular/core/testing';

import { UserEditComponent } from './user-edit.component';

describe('a user-edit component', () => {
	let component: UserEditComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				UserEditComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([UserEditComponent], (UserEditComponent) => {
		component = UserEditComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});