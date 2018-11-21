import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { AuthManagerService } from 'src/app/services/auth-manager.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { MatSnackBar } from '@angular/material';
import { AuthSnackBarComponent } from '../auth-snack-bar/auth-snack-bar.component';

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
    private authManager: AuthManagerService,
    public snackBar: MatSnackBar
  ) { }

  logIn() {
    // this.router.navigateByUrl('/home');
    for (let i = 0; i < this.users.length; i++) {
      if (this.user.email === this.users[i].email 
          && this.user.password === this.users[i].password) {
          this.authManager.currentUser = this.users[i];
          this.saveinLocalStorage(this.users[i]);
          this.router.navigateByUrl('/home');
          return;
      }
    }
    this.showAuthSnackBar();
  }

  showAuthSnackBar() {
    this.snackBar.openFromComponent(AuthSnackBarComponent, {
      duration: 1000,
    });
  }

  saveinLocalStorage(obj) {
    let serialObj = JSON.stringify(obj);
    localStorage.setItem("auth", serialObj)
  }

  ngOnInit() {
    this.authManager.getUsers().subscribe(res => {
      this.users = res;
      console.log(this.users);
    });

    
  }

}
