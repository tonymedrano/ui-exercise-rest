import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { slideInOutAnimation } from '../animations/index';
import { UserService, User } from '../service/index';
 
@Component({
    templateUrl: 'user-add-edit.component.html',
    styles:[`
        .side-form {
            width: 600px;
            height: 400px;
            margin: 0 auto;
            background: white;
            padding: 20px;
            margin-top:40px;
        }
    `],
    animations: [slideInOutAnimation],
    host: { '[@slideInOutAnimation]': '' }
})

export class UserAddEditComponent implements OnInit {
    title = "Add User";
    user: any = {};

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService) { }

    ngOnInit() {
        let userId = Number(this.route.snapshot.params['id']);
        if (userId) {
            this.title = 'Edit User';
           this.userService.getUser(userId).subscribe((user:Array<User>) => {
			this.user = user;
		});
        }
    }

    saveUser(user:any) {
        this.userService.createUser(user).subscribe((user:Array<User>) => {
			this.user = user;
            this.router.navigate(['users']);
		});
    }
}