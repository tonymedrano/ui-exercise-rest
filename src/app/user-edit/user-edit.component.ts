import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { slideInOutAnimation } from '../animations/index';
import { UserService, User } from '../service/index';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
	selector: 'user-edit',
	templateUrl: 'user-edit.component.html',
	styleUrls: ['user-edit.component.scss'],
	animations: [slideInOutAnimation],
	host: { '[@slideInOutAnimation]': '' }
})

export class UserEditComponent implements OnInit {
	title = "Add User";
	user: any = {};
	isEDit: boolean = false;
	userform: FormGroup;
	dateofbirth: string;


	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private userService: UserService,
		public toastr: ToastsManager,
		vcr: ViewContainerRef) {
		this.toastr.setRootViewContainerRef(vcr);
	}

	ngOnInit() {
		//. Usuario a editar según su Id.
		let userId = Number(this.route.snapshot.params['id']);
		if (userId) {
			this.isEDit = true;
			this.title = 'Edit User';
			this.userService.getUser(userId).subscribe((user: Array<User>) => {
				this.user = user;
			});
		}

		//. Validación formulario usuario.
		this.userform = new FormGroup({
			name: new FormControl('', Validators.required),
			birthdate: new FormControl('', [
				Validators.required
			])
		});
	}

	//. Creación/ Actualización datos usurio.
	saveUser(name:string, birthdate:string) {
		let date = this.formatBirthDate(birthdate);
		let userData:any = {name: name, birthdate: date};
		if (this.isEDit)
			this.userService.updateUser(userData).subscribe((user: Array<User>) => {
				this.user = user;
				this.showSuccess();
			}, (error) => {
				this.showError();
			});
		else
			this.userService.createUser(userData).subscribe((user: Array<User>) => {
				this.user = user;
				this.showSuccess();
			}, (error) => {
				this.showError();
			});
	}

	//. Utilidad: Formatea fecha para saveUser function.
	formatBirthDate(date) {
		let local = new Date(Date.parse(date));
		return local;
	}

	//. Utilidad: Mensaje ok de message function.
	showSuccess() {
		this.toastr.success('User created!', 'Success!', { dismiss: 'controlled' }).then((toast: any) => {
			setTimeout(() => {
				//  this.toastr.dismissToast(toast);
				this.router.navigate(['users']);
			}, 1000);
		});
	}

	//. Utilidad: Mensaje error de message function.
	showError() {
		this.toastr.error('Server Error:  try later!', 'Oops!');
	}
}