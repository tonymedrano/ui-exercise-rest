import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';

describe('a service component', () => {
	let component: UserService;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				UserService
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([UserService], (UserService) => {
		component = UserService;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});