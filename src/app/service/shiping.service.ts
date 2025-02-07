import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Product} from "../products";

@Injectable({
    providedIn: 'root'
})
export class ShippngService {
    private jsonURL = 'assets/shipping.json';

    constructor(private http: HttpClient) {}

    getProduct(): Observable<Product[]> {
        return this.http.get<{ id: number; nombre: string; cost:number; details: string; suplier: number }[]>(this.jsonURL).pipe(
            map(data => data.map(pro => new Product(pro.id, pro.nombre, pro.cost, pro.details, pro.suplier)))
        );
    }
}