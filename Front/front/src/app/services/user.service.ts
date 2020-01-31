import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  	apiURL:string ='http://localhost:8000/api/';


  	constructor(public http: HttpClient) { }

  	getUsers():Observable<any>{
  		return this.http.get(this.apiURL + "listarUsers");
  	}
}
