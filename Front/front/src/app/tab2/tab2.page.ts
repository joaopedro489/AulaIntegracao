import { Component } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
	users;
  constructor(public user: UserService) {
  	this.getUsers();
  }

  getUsers():any{
  	this.user.getUsers().subscribe( (resposta) =>{
  		console.log(resposta);
  		this.users = resposta;
  	} )
  }

}
