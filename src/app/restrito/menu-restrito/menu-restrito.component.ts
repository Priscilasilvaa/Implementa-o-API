import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-menu-restrito',
  templateUrl: './menu-restrito.component.html',
  styleUrls: ['./menu-restrito.component.css']
})
export class MenuRestritoComponent {
  _loginService: any;
  private _router: any;

  constructor( private_router:Router, private_loginService:LoginService){}
logout(){
  localStorage.clear();
  this._loginService.setMostraMenu(true);
  this._router.navigate(['/login']);
}

}
