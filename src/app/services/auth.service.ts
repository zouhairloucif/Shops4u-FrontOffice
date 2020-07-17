import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

// @Injectable({
// 	providedIn: 'root'
// })
@Injectable()
export class AuthService {

	constructor(private httpClient: HttpClient) { }

	// API: POST /auth
	public userRegister(data: any) {
		return this.httpClient.post('api/front/user/signup', data);
	}


	// API: POST /auth
	public login(data: any) {
		return this.httpClient.post('api/front/auth/login', data);
	}

	//Logout
	public logout(token: any) {
		const header = new HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
		return this.httpClient.post('api/front/auth/logout', null, { headers: header });
	}

}
