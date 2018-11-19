import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { AuthManagerService } from 'src/app/services/auth-manager.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  user: any = {
    email: "",
    password: ""
  };
  users: any = [];

  constructor(
    private router: Router,
    private authManager: AuthManagerService
  ) { }

  logIn() {
    // this.router.navigateByUrl('/home');
    for (let i = 0; i < this.users.length; i++) {
      if (this.user.email === this.users[i].email 
          && this.user.password === this.users[i].password) {
          this.authManager.currentUser = this.users[i];
          this.router.navigateByUrl('/home');
      }
    }
  }

  ngOnInit() {
    this.authManager.getUsers().subscribe(res => {
      this.users = res;
      console.log(this.users);
    });
  }

}
