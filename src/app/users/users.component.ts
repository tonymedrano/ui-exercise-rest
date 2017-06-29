import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { fadeInAnimation } from '../animations/index';

import { User } from '../service/user.interface';
import { UserService } from '../service/user.service';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
	selector: 'users',
	templateUrl: 'users.component.html',
	styleUrls: ['./users.component.scss'],
	providers: [UserService],
	animations: [fadeInAnimation],
	host: { '[@fadeInAnimation]': '' }
})

export class UsersComponent implements OnInit {

	users: Array<User>; //. todos los usuarios.
	subscription: Subscription;
	loading: boolean;

	constructor(private userService: UserService, public toastr: ToastsManager, vcr: ViewContainerRef) {
		this.toastr.setRootViewContainerRef(vcr);
		this.loading = false;
	}

	ngOnInit() {
		this.loading = true;
		this.users = [];
		this.subscription = this.userService.getUserAll().subscribe((users: Array<User>) => {
			this.loading = false;
			this.users = users;
		});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	delete(id: number) {
		this.loading = true;
		this.userService.deleteUser(id).subscribe((users: Array<User>) => {
			this.users = users;
			this.showSuccess();
		}, (error) => {
			this.showError();
		});
	}

	//. Utilidad: Mensaje ok de message function.
	showSuccess() {
		this.loading = false;
		this.toastr.success('User deleted!', 'Success!');
	}

	//. Utilidad: Mensaje error de message function.
	showError() {
		this.loading = false;
		this.toastr.error('Server Error:  try later!', 'Oops!');
	}
}