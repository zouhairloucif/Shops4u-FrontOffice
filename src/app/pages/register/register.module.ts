import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { registerRoutes } from "./register.routes";
import { SharedModule } from "../../shared/shared.module";
import { RegisterComponent } from "./register.component";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(registerRoutes),
        CommonModule,
        HttpClientModule,
        FormsModule,
    ],
    declarations: [
        RegisterComponent
    ],
})
export class RegisterModule { }