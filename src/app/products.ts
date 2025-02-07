export class Product {
  id: number;
  name: string;
  price: number;
  description: string;
  provedor: number;

  constructor(id: number, name: string, price: number, description: string, provedor:number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.provedor = provedor;
  }
}






/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/