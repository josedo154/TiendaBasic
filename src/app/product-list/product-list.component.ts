import { Component } from '@angular/core';

import {Product} from '../products';
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../cart.service";
import {ShippngNuevoService} from "../service/shippngNuevo.service";
import {ShippngService} from "../service/shiping.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private shipinService: ShippngNuevoService, private shipinService2: ShippngService  ) { }

  ngOnInit() {
    this.shipinService.getProduct().subscribe(datos => {
      this.products = datos;
    });

    this.shipinService2.getProduct().subscribe(datos => {
      for (const dato of datos) {
        this.products.push(dato);
      }
    });
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/