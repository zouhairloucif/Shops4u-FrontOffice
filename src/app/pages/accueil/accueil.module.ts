
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { accueilRoutes } from "./accueil.routes";
import { SharedModule } from "../../shared/shared.module";
import { AccueilComponent } from "./accueil.component";
@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(accueilRoutes)
    ],
    declarations: [
        AccueilComponent
    ]
})
export class AccueilModule { }