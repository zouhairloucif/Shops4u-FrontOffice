

import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class ProductService {

    constructor(private http: Http, private httpClient: HttpClient) { }

    public getProducts(dataURL: string) {
        return this.http.get(dataURL)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    public getProduct(token: any, id: any) {
        const header = new HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
        return this.httpClient.get('api/front/produit/show/' + id, { headers: header });
    }


    public getallProducts(token: any) {
        const header = new HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
        return this.httpClient.get('api/front/produit/all', { headers: header });
    }
}