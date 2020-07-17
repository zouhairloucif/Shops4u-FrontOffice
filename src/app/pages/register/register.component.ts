import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {

  // role: any = 3;
  checked: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
    this.CheckLoggedIn();
  }

  ngOnInit() {
  }

  register(registerForm: NgForm) {
    if (registerForm.valid) {
      this.authService.userRegister(registerForm.value).subscribe((data) => {
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
      }, (error: any) => {
        if (401 == error['status']) {
          console.log("error token");
        }
      }
      );

    } else {
      console.log(registerForm.errors);
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

  toggle(checked: boolean): void {
    this.checked = checked;
  }

}
