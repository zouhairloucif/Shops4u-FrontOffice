/**
 * Created by andrew.yang on 7/27/2017.
 */
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { registerRoutes } from './register.routes';
import {SharedModule} from '../../shared/shared.module';
import {RegisterComponent} from './register.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(registerRoutes)
    ],
    declarations: [
        RegisterComponent
    ]
})
export class RegisterModule { }