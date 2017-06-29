import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { fadeInAnimation } from '../animations/index';

import { User } from '../service/user.interface';
import { UserService } from '../service/user.service';

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
	isAppLoading:boolean = false;

	constructor(private userService: UserService) {
		this.isAppLoading = true;
	}

	ngOnInit() {
		this.users = [];
		this.subscription = this.userService.getUserAll().subscribe((users:Array<User>) => {
			this.users = users;
			this.isAppLoading = false;
		});
	}

	ngOnDestroy() {
        this.subscription.unsubscribe();
    }

	delete(id: number) {
        this.userService.deleteUser(id).subscribe((users:Array<User>) => {
			this.users = users;
		});
    }
}