import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UserService {

	constructor(private http: Http) {
        this.http = http;
    }

	//. Lista completa de usuarios.
	getUserAll():Observable<Array<any>> {
        return this.http.get('http://hello-world.innocv.com/api/user/getall')
          .map((res:Response) => {
                let users:Array<any> = res.json();
                return users;
        }).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

	//. selecciona usuario (especificado en su id).
	getUser(id:number):Observable<Array<any>> {
        return this.http.get(`http://hello-world.innocv.com/api/user/get/${id}`)
          .map((res:Response) => {
                let user:Array<any> = res.json();
                return user;
        }).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

	//. crea usuario.
	createUser(user:any):Observable<Array<any>> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put('http://hello-world.innocv.com/api/user/create', user, options)
          .map((res:Response) => {
                let user:Array<any> = res.json();
                return user;
        }).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

	//. actualiza usuario.
    updateUser(user:any):Observable<Array<any>> {
        let body= JSON.stringify({
            user: user.name,
            birthdate: user.birthdate
        });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put('http://hello-world.innocv.com/api/user/update', user, options)
          .map((res:Response) => {
                let user:Array<any> = res.json();
                return user;
        }).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

	//. elimina usuario (especificado en su id).
	deleteUser(userId:number):void {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.http.get(`http://hello-world.innocv.com/api/user/remove/${userId}`, options)
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}