import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product} from '../products';
import { CartService } from '../cart.service';
import {ShippngNuevoService} from "../service/shippngNuevo.service";
import {ShippngService} from "../service/shiping.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  
  product: Product | undefined;
  products: Product[] = [];

  constructor(private route: ActivatedRoute, private cartService: CartService, private shipinService: ShippngNuevoService, private shipinService2: ShippngService  ) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.shipinService.getProduct().subscribe(datos => {
      this.products = datos;
    });

    this.shipinService2.getProduct().subscribe(datos => {
      for (const dato of datos) {
        this.products.push(dato);
      }
    });
  
    // Find the product that correspond with the id provided in route.
    //this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
