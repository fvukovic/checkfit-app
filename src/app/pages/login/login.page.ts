import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
public username: string;
public password: string;
  constructor(public translate: TranslateService, public authService: AuthService) { }

  ngOnInit() {
  }

  onLogin(){
    console.log(this.username, this.password);
    this.authService.postLogin(this.username, this.password).subscribe((data: any) => {
      console.log(data);
      if(data.success){
        this.authService.setCurrentUser(data);
        }else{
            //Hendlaj error
        }
    });
  }

}
