
import { Component, OnInit } from '@angular/core';
import { CartService } from "../../services/cart.service";
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'top-bar',
  styleUrls: ['./top-bar.component.css'],
  templateUrl: './topbar.component.html',
  providers: [AuthService]
})
export class TopbarComponent implements OnInit {
  public collapse: boolean = false;
  public cart_num: number;
  public authenticated: boolean = false;
  constructor(private cartService: CartService, private authService: AuthService, private router: Router) {
    this.CheckLoggedIn();
  }

  ngOnInit() {
    this.cartService.cartListSubject
      .subscribe(res => {
        this.cart_num = res.length;
      })
  }
  toggleCartPopup = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    this.cartService.toggleCart()
  }

  CheckLoggedIn(): void {
    if (localStorage.getItem("currentUser")) {
      let currentUser = JSON.parse(localStorage.getItem("currentUser"));
      let currentUserRole = currentUser['role'][0];
      if ("client" == currentUserRole) {
        this.authenticated = true;
      }
    }
  }

  logout(): void {
    if (localStorage.getItem("currentUser")) {
      let currentUser = JSON.parse(localStorage.getItem("currentUser"));
      let access_token = currentUser['access_token'];
      this.authService.logout(access_token).subscribe(
        (data: any) => {
          localStorage.removeItem('currentUser');
          this.router.navigate(['/login']);
        },
        (error: any) => {
          localStorage.removeItem('currentUser');
          console.log(error);
        }
      );
    } else {
      this.router.navigate(['/login']);
    }
  }
}