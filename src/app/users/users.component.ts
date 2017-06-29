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
	isAppLoading: boolean = false;

	constructor(private userService: UserService, public toastr: ToastsManager, vcr: ViewContainerRef) {
		this.toastr.setRootViewContainerRef(vcr);
		this.isAppLoading = true;
	}

	ngOnInit() {
		this.users = [];
		this.subscription = this.userService.getUserAll().subscribe((users: Array<User>) => {
			this.users = users;
			this.isAppLoading = false;
		});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	delete(id: number) {
		this.userService.deleteUser(id).subscribe((users: Array<User>) => {
			this.users = users;
			this.showSuccess();
		}, (error) => {
			this.showError();
		});
	}

	//. Utilidad: Mensaje ok de message function.
	showSuccess() {
		this.toastr.success('User deleted!', 'Success!');
	}

	//. Utilidad: Mensaje error de message function.
	showError() {
		this.toastr.error('Server Error:  try later!', 'Oops!');
	}
}