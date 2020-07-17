import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../services/products.service";
import { Product } from "../../model/product";
import { CartService } from "../../services/cart.service";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    private sub: any;
    public product: any;
    quantity: number = 1;
    constructor(private route: ActivatedRoute,
        private productService: ProductService,
        private cartService: CartService
    ) { }

    ngOnInit() {
        this.route.params
            .subscribe(res => {
                this.getProduct(res.id);
            })
    }
    // getProduct = (id) => {
    //     this.sub = this.productService.getProducts('./assets/mock-data/products.json')
    //         .subscribe(res => {
    //             this.product = res[id-1];
    //         })
    // };
    getProduct = (id: any) => {
        if (localStorage.getItem("currentUser")) {
            let currentUser = JSON.parse(localStorage.getItem("currentUser"));
            let access_token = currentUser['access_token'];
            this.sub = this.productService.getProduct(access_token, id)
                .subscribe(res => {
                    this.product = res;
                })
        }
    };
    changeQuantity = (newQuantity: number) => {
        this.quantity = newQuantity;
    };
    addToCart = (product) => {
        if (this.quantity) this.cartService.addToCart({ product, quantity: this.quantity })
    };
    ngOnDestroy() {
        if(typeof(this.sub) != 'undefined'){
            this.sub.unsubscribe();
        }
    }
}
