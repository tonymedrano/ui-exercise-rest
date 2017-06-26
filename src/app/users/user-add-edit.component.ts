import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { slideInOutAnimation } from '../animations/index';
import { UserService, User } from '../service/index';

@Component({
   // moduleId: module.id.toString(),
    templateUrl: 'user-add-edit.component.html',
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
        // save product
        this.userService.createUser(user);

        // redirect to users view
        this.router.navigate(['users']);

        // publish event so list controller can refresh
       // this.pubSubService.publish('products-updated');
    }
}