import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { loginRoutes } from "./login.routes";
import { SharedModule } from "../../shared/shared.module";
import { LoginComponent } from "./login.component";
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(loginRoutes),
        CommonModule,
        HttpClientModule,
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule { }