import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/products.service";
import { Product } from "../../model/product";
import { CartService } from "../../services/cart.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-accueil',
    templateUrl: './accueil.component.html',
    styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
    public products: any;
    private sub: any;
    constructor(
        private productService: ProductService,
        private cartService: CartService,
        private router: Router
    ) {}
    errorHandler(event: any) {
        console.debug(event);
        event.target.src = "../../assets/imgs/notfound.jpg";
     }
    ngOnInit() {
        this.load();
    }
    load = () => {
        if (localStorage.getItem("currentUser")) {
            let currentUser = JSON.parse(localStorage.getItem("currentUser"));
            let access_token = currentUser['access_token'];
            this.sub = this.productService.getallProducts(access_token)
                .subscribe(res => {
                    this.products = res;
                })
        }
    };
    addToCart = (product: any) => {
        this.cartService.addToCart({ product, quantity: 1 })
    };
    ngOnDestroy() {
        if (typeof (this.sub) != 'undefined') {
            this.sub.unsubscribe();
        }
    }
}
