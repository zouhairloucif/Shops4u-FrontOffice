import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { TopbarComponent } from "./topbar.component";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CartPopupComponent } from "../../pages/cart/cart-popup/cart-popup.component";

@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        CommonModule,
        HttpClientModule,
    ],
    declarations: [
        TopbarComponent,
        CartPopupComponent
    ]
})
export class TopbarModule { }