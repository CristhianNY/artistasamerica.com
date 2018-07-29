import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public email : string;
  public password : string;
  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMessage : FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authService.loginEmail(this.email,this.password)
    .then((res)=>{
      this.flashMessage.show('Bienvenido a Artistas America',
      {cssClass: 'alert-success', timeout:4000});
      this.router.navigate(["/admin"]);
    }).catch((err)=>{
      this.flashMessage.show('No Puedes entrar!!',
      {cssClass: 'alert-danger', timeout:4000});
      this.router.navigate(["/login"]);
    });
  }
  onClickTwitterLogin(){
    this.authService.loginWithTwitter()
    .then((res)=>{
      this.router.navigate(['/admin']);
    }).catch((err)=>{
      console.log(err);
    });
  }
  onClickFacebookLogin(){
    this.authService.loginWithFacebook()
    .then((res)=>{
      this.router.navigate(['/admin']);
    }).catch((err)=>{
      console.log(err);
    });
  }
  onClickGoogleLogin(){
  
    this.authService.loginGoogle()
    .then((res)=>{
      this.router.navigate(['/admin']);
    }).catch((err)=>{
      console.log(err);
    });
  }

}
