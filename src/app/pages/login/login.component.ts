import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TopbarComponent } from '../../components/topbar/topbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {
    this.CheckLoggedIn();
  }

  ngOnInit() {
  }

  login(loginForm: NgForm): void {

    if (loginForm.valid) {
      // this.spinner.style['display'] = 'block';
      this.authService.login(loginForm.value).subscribe(
        (data) => {
          if (data) {
            var currentUser = <any>data;
            var currentUserRole = currentUser['role'][0];
            if ("client" == currentUserRole) {
              localStorage.setItem("currentUser", JSON.stringify(currentUser));
              this.router.navigate(['accueil']);
            } else {
              console.log("error token");
            }
          }
        },
        (error: any) => {
          // this.spinner.style['display'] = 'none';
          if (401 == error['status']) {
            console.log("error token");
          }
        }
      );

    }

  }

  CheckLoggedIn(): void {
    if (localStorage.getItem("currentUser")) {
      var currentUser = JSON.parse(localStorage.getItem("currentUser"));
      var currentUserRole = currentUser['role'][0];
      if ("client" == currentUserRole) {
        this.router.navigate(['accueil']);
      }
    }
  }

}
