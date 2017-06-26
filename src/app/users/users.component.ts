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

	constructor(private userService: UserService) {}

	ngOnInit() {
		this.users = [];
        this.loadUsers();
	}

	ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

	delete(id: number) {
        this.userService.deleteUser(id).subscribe((users:Array<User>) => {
			this.users = users;
			this.loadUsers();
		});
    }

	loadUsers(){
		this.subscription = this.userService.getUserAll().subscribe((users:Array<User>) => {
			this.users = users;
		});
	}
}